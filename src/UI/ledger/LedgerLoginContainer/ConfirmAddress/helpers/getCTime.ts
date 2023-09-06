const MAX_AUTH_TOKEN_TTL_SIZE = 41;
const MAX_INT_NUM_DIGITS = 10;

function append_to_str(
  source: string,
  destination: string,
  index: number,
  max_size: number
): string {
  if (source.length + index >= max_size) {
    console.log('\x1b[42m%s\x1b[0m', 'append_to_str');

    return '';
  }

  destination = destination.substring(0, index) + source;
  index += source.length;
  return destination;
}

function append_time(
  output: string,
  index: number,
  value: number,
  tag: string
): string {
  if (value === 0) {
    console.log('\x1b[42m%s\x1b[0m', 'append_time');
    return output;
  }

  const buffer: string = value.toString();
  const max_size: number = MAX_INT_NUM_DIGITS + 1;

  output = append_to_str(buffer, output, index, max_size);
  output = append_to_str(tag, output, index, max_size);
  return output;
}

export function getCTime(input: string): string {
  const max_size: number = MAX_AUTH_TOKEN_TTL_SIZE;
  let output = '';
  const num_seconds: number = parseInt(input);
  if (num_seconds === 0) {
    // invalid TTL
    const na_str = 'N/A time';
    if (max_size > na_str.length) {
      output = na_str;
    }
    console.log('\x1b[42m%s\x1b[0m', 11);

    return output;
  }

  let temp_output = '';
  const current_temp_output_index = 0;

  const h = Math.floor(num_seconds / 3600);
  const m = Math.floor((num_seconds - 3600 * h) / 60);
  const s = num_seconds - 3600 * h - m * 60;

  console.log({ h, m, s });

  if (h > 24) {
    const more_than_24_msg = 'more than one day';
    if (max_size > more_than_24_msg.length) {
      output = more_than_24_msg;
    }
    console.log('\x1b[42m%s\x1b[0m', 12);

    return output;
  }
  temp_output = append_time(temp_output, current_temp_output_index, h, 'h ');
  temp_output = append_time(temp_output, current_temp_output_index, m, 'min ');
  temp_output = append_time(temp_output, current_temp_output_index, s, 'sec.');

  if (current_temp_output_index < max_size) {
    output = temp_output.substring(0, current_temp_output_index);
    console.log('\x1b[42m%s\x1b[0m', 13, temp_output, {
      current_temp_output_index,
      max_size
    });
  }

  const sec_str = ' sec';
  if (max_size > input.length + sec_str.length) {
    output = input + sec_str;
  }
  console.log('\x1b[42m%s\x1b[0m', 14);

  return output;
}
