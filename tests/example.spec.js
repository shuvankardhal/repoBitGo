// @ts-check
const { test, expect } = require('@playwright/test');

test('assert the transactions count', async ({ page }) => {
  await page.goto('https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732');
  const transaction=page.locator(`//div[@class='transactions']/h3[contains(text(),'25 of 2875 Transactions')]`)
  expect(await transaction).toBe('25 of 2875 Transactions')
});

test('assert input-output', async ({ page }) => {
  await page.goto('https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732');
  var inputnums = page.locator('.vins').children('div').length;
  var outputNums= page.locator('.vouts').children('div').length;
  
  
});
