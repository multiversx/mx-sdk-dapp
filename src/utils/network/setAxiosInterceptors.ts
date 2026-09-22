import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

interface InterceptAxiosCallsConfig {
  authenticatedDomains: string[];
  bearerToken?: string;
}

let requestInterceptorId: number | null = null;
let responseInterceptorId: number | null = null;

const resolveRequestUrl = (config: InternalAxiosRequestConfig): URL | null => {
  try {
    return new URL(axios.getUri(config));
  } catch {
    return null;
  }
};

const isAuthenticatedTarget = (
  target: URL | null,
  authenticatedDomains: string[]
): boolean => {
  if (!target) {
    return false;
  }

  return authenticatedDomains.some((domain) => {
    try {
      const allowed = new URL(domain);

      if (allowed.origin !== target.origin) {
        return false;
      }

      const allowedPath = allowed.pathname.replace(/\/$/, '');

      return (
        allowedPath === '' ||
        target.pathname === allowedPath ||
        target.pathname.startsWith(`${allowedPath}/`)
      );
    } catch {
      return false;
    }
  });
};

export const setAxiosInterceptors = ({
  authenticatedDomains,
  bearerToken
}: InterceptAxiosCallsConfig): void => {
  if (requestInterceptorId !== null) {
    axios.interceptors.request.eject(requestInterceptorId);
  }

  if (responseInterceptorId !== null) {
    axios.interceptors.response.eject(responseInterceptorId);
  }

  responseInterceptorId = axios.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const url = error.config?.url?.split('?')[0];
      console.error('Axios error for: ', url);
      return Promise.reject(error);
    }
  );

  requestInterceptorId = axios.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const target = resolveRequestUrl(config);

      if (bearerToken && isAuthenticatedTarget(target, authenticatedDomains)) {
        config.headers.Authorization = `Bearer ${bearerToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );
};
