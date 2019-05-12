let data = [...document.querySelectorAll("table tr")]
  .map(it => [...it.children].slice(1, 100)   
	  .filter(it => it.innerHTML.indexOf('blizzard'))
    .map(
      it => it.innerHTML
        .replace(/<(?:.|\n)*?>/gm, '')
        .replace(/\&nbsp\;/gm, '')
        .replace(/^\s*/, '')
        .replace(/\s*$/, '')
        .replace(/,/gm, '.')
      ).join(",")
    );

data = [data[0], ...data.slice(1).sort()];
data = data.join("\n")

const element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
element.setAttribute('download', 'rasputin.csv');
document.body.appendChild(element);
element.click();
document.body.removeChild(element);
