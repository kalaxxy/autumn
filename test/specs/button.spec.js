const webdriverio = require('webdriverio');
const options = require('../../wdio.conf');
const client = webdriverio.multiremote(options);
const fs = require('fs');

jest.setTimeout(30000);

beforeAll(() => {
  return client.init().url('http://localhost:8080/admin/login')
});

test('на странице есть кнопка отправить', () => {
  return client
    .isExisting('.auth__submit')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    .screenshot()
    .then(browsers => {
      for (const browserName in browsers) {
        fs.writeFileSync(`../../errorShots/${browserName}_button_is_existing.png`, browsers[browserName].value, 'base64');
      }
    })
})

afterAll(() => {
  return client.end();
})