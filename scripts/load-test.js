import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10, // Virtual users
  duration: '30s',
};

export default function () {
  const hosts = ['http://foo.localhost', 'http://bar.localhost'];
  const url = hosts[Math.floor(Math.random() * hosts.length)];

  const res = http.get(url);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'body matches host': (r) => r.body.includes(url.includes('foo') ? 'foo' : 'bar'),
  });
  sleep(0.1);
}