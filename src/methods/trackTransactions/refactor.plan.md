# Refactor trackTransactions Architecture

## Overview

Address architectural issues in `trackTransactions.ts` including a critical subscription bug, global state dependencies, missing error handling, and improve overall code quality and maintainability.

## Implementation Plan

### 1. Fix Critical Subscription Bug (Lines 115-118)

**Issue**: `SubscriptionsEnum.websocketEventReceived` is set twice with different values, overwriting the websocket event subscription.

**Files**: `src/methods/trackTransactions/trackTransactions.ts`

**Changes**:

- Remove duplicate subscription at lines 115-118
- The correct subscription is already set at line 50-53 inside `setupWebSocketTracking()`
- Keep only the `websocketStatusChanged` subscription registration
```typescript
// Remove this (lines 115-118):
subscriptions.set(
  SubscriptionsEnum.websocketEventReceived,
  stopTransactionsTracking  // Wrong!
);
```


### 2. Remove Redundant Websocket Status Monitoring

**Issue**: `startWatchingWebsocketStatus()` polls `websocketConnection.status` every second, duplicating Redux subscription logic.

**Files**: `src/methods/trackTransactions/trackTransactions.ts`

**Changes**:

- Remove `startWatchingWebsocketStatus()` function (lines 56-74)
- Remove `websocketStatusCheckIntervalRef` variable and related cleanup
- Remove call to `startWatchingWebsocketStatus()` from PENDING case (line 102)
- Rely solely on Redux subscription for websocket status changes

**Rationale**: Redux store already provides `websocketStatus` changes through subscription. The interval polling of global `websocketConnection.status` is redundant and creates race conditions.

### 3. Add Error Handling

**Issue**: `checkTransactionStatus()` is async but errors are never caught, which could silently break tracking.

**Files**: `src/methods/trackTransactions/trackTransactions.ts`

**Changes**:

- Wrap `checkTransactionStatus()` call in try-catch inside `recheckStatus()`
- Log errors with context about the tracking mechanism (websocket vs polling)
- Continue tracking even if individual checks fail
```typescript
const recheckStatus = async () => {
  try {
    await checkTransactionStatus();
  } catch (error) {
    console.error('[trackTransactions] Error checking transaction status:', error);
  }
};
```


### 4. Add Type Annotations

**Issue**: Missing explicit TypeScript types for better code clarity and IDE support.

**Files**: `src/methods/trackTransactions/trackTransactions.ts`

**Changes**:

- Add return type annotation to `trackTransactions()`
- Add types for internal functions (`startPolling`, `stopPolling`, `setupWebSocketTracking`, `recheckStatus`)
- Add proper NodeJS.Timeout type for interval refs
```typescript
export async function trackTransactions(): Promise<{ stopTransactionsTracking: () => void }> {
  // ...
  let pollingIntervalRef: NodeJS.Timeout | null = null;
  
  const recheckStatus = async (): Promise<void> => { /* ... */ };
  const startPolling = (): void => { /* ... */ };
  const stopPolling = (): void => { /* ... */ };
  const setupWebSocketTracking = (): void => { /* ... */ };
  const stopTransactionsTracking = (): void => { /* ... */ };
}
```


### 5. Fix Timestamp Initialization Edge Case

**Issue**: Initial timestamp from selector could be `undefined`, and websocket reconnections might have stale timestamps.

**Files**: `src/methods/trackTransactions/trackTransactions.ts`

**Changes**:

- Initialize timestamp with proper null handling
- Add null check in websocket event comparison
```typescript
let timestamp = websocketEventSelector(store.getState())?.timestamp ?? null;

// In setupWebSocketTracking:
if (websocketEvent?.message && websocketEvent.timestamp != null && timestamp !== websocketEvent.timestamp) {
  timestamp = websocketEvent.timestamp;
  recheckStatus();
}
```


### 6. Clarify Nullish Coalescing in startPolling

**Issue**: `pollingIntervalRef ??= setInterval(...)` is clever but unclear intent.

**Files**: `src/methods/trackTransactions/trackTransactions.ts`

**Changes**:

- Add comment explaining the pattern or use explicit check
```typescript
const startPolling = (): void => {
  // Prevent multiple polling intervals
  if (pollingIntervalRef) {
    return;
  }
  pollingIntervalRef = setInterval(recheckStatus, pollingInterval);
};
```


### 7. Extract Complex Subscription Callback

**Issue**: Websocket status subscription callback (lines 88-109) is 22 lines long and hard to read.

**Files**: `src/methods/trackTransactions/trackTransactions.ts`

**Changes**:

- Extract callback to named function `handleWebsocketStatusChange`
- Keep it within `trackTransactions` closure to access internal functions
```typescript
const handleWebsocketStatusChange = (
  { account: { address }, config: { websocketStatus } }: StoreType,
  prevState: StoreType
): void => {
  const hasStatusChange = prevState.config.websocketStatus !== websocketStatus;
  
  if (!hasStatusChange) {
    return;
  }
  
  switch (websocketStatus) {
    case WebsocketConnectionStatusEnum.COMPLETED:
      setupWebSocketTracking();
      break;
    case WebsocketConnectionStatusEnum.PENDING:
      startPolling();
      break;
    default:
      address ? startPolling() : stopTransactionsTracking();
      break;
  }
};

const unsubscribeWebsocketStatus = store.subscribe(handleWebsocketStatusChange);
```


### 8. Update Tests

**Files**: `src/methods/trackTransactions/tests/trackTransactions.test.ts`

**Changes**:

- Remove tests related to `startWatchingWebsocketStatus` (lines 273-344)
- Update test expectations for error handling
- Add tests for new edge cases (timestamp null handling)
- Update mock assertions to reflect removed duplicate subscription
- Add test for async `recheckStatus` error handling

### 9. Add JSDoc Documentation

**Files**: `src/methods/trackTransactions/trackTransactions.ts`

**Changes**:

- Enhance function documentation with details about:
        - WebSocket vs polling fallback mechanism
        - Subscription lifecycle
        - Error handling strategy
        - Return value usage
```typescript
/**
 * Tracks pending transactions using WebSocket (preferred) or polling (fallback)
 * 
 * The function monitors Redux store for websocket status changes and automatically
 * switches between WebSocket event-driven tracking and interval-based polling.
 * 
 * WebSocket tracking is used when websocket connection is COMPLETED.
 * Polling is used when connection is PENDING or user is logged in without websocket.
 * 
 * @returns Object with stopTransactionsTracking function to cleanup all subscriptions and intervals
 * 
 * @example
 * const { stopTransactionsTracking } = await trackTransactions();
 * // Later, cleanup:
 * stopTransactionsTracking();
 */
```


## Files to Modify

- `src/methods/trackTransactions/trackTransactions.ts` - Main refactoring
- `src/methods/trackTransactions/tests/trackTransactions.test.ts` - Update tests

## Testing Strategy

1. Run existing unit tests to ensure no regressions
2. Verify subscription cleanup works correctly
3. Test error scenarios don't break tracking
4. Validate WebSocket → Polling → WebSocket transitions
5. Confirm no memory leaks from intervals/subscriptions