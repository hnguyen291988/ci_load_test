import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',
};

// ... your existing imports, scenarios, default function ...

export function handleSummary(data) {
  // Optional: you can customize what goes into stdout + files
  return {
    'stdout': textSummary(data, { indent: '→', enableColors: true }), // still show nice console output
    'summary.json': JSON.stringify(data), // redundant with --summary-export, but safe
  };
}

export default function () {
  // We hit localhost/foo because KinD maps its port 80 to the host port 80
  const res = http.get('http://localhost/foo');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'body contains foo': (r) => r.body.includes('foo'),
  });

  sleep(1);
}