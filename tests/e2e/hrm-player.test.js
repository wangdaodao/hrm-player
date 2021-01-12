import { Selector } from 'testcafe';

fixture(`百度案例`).page(`https://www.baidu.com`);

test('百度搜索功能', async t => {
  await t.typeText('#kw', "王叨叨")
    .click('#su')
});