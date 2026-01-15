import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  // We hit localhost/foo because KinD maps its port 80 to the host port 80
  const res = http.get('http://localhost/foo');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'body contains foo': (r) => r.body.includes('foo'),
  });

  sleep(1);
}