const data = [
  ["Name", "BNet"].join(','),
  ...[...document.querySelectorAll(".card-list-item .card-title")].map(
      it => [
        it.innerHTML.substr(0, it.innerHTML.indexOf('<'))
          .replace(/^\s*/, '')
          .replace(/\s*$/, ''),
        it.querySelector('.user-bnet').innerHTML
          .substr(5)
          .replace(/^\s*/, '')
          .replace(/\s*$/, ''),
      ].join(',')
    ).sort()
].join('\n')

const element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
element.setAttribute('download', 'charlamagne.csv');
document.body.appendChild(element);
element.click();
document.body.removeChild(element);
