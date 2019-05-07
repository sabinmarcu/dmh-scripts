const data = [...document.querySelectorAll("table tr")]
  .map(it => [...it.children].slice(1, 100).map(
    it => it.innerHTML
      .replace(/<(?:.|\n)*?>/gm, '')
      .replace(/\&nbsp\;/gm, '')
      .replace(/^\s*/, '')
      .replace(/\s*$/, '')
      .replace(/,/gm, '.')
    ).join(",")
  ).join("\n");

const element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
element.setAttribute('download', 'rasputin.csv');
document.body.appendChild(element);
element.click();
document.body.removeChild(element);