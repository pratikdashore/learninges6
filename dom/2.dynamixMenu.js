const mainContent = document.getElementById('main-content');
const btn = document.getElementsByClassName('navbar-toggle').item(0);



const textNode = document.createElement('span');
textNode.innerText = 'World';
textNode.className = 'span-txt';

textNode.className += ' txt-bold';

mainContent.appendChild(textNode);

mainContent.append(textNode);

function onClick(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log(event.target);
  event.target.firstElementChild?.classList.toggle('hidden');

}

btn.addEventListener('click', function () {
  alert('btn click called');
});


let data = [{
  displayNm: 'Menu 1',
  klsNm: '',
  children: [{
    displayNm: 'Menu 1.1',
    children: [{
      displayNm: 'Menu 1.1.1'
    }, {
      displayNm: 'Menu 1.1.2'
    }, {
      displayNm: 'Menu 1.1.3'
    }]
  }, {
    displayNm: 'Menu 1.2'
  }, {
    displayNm: 'Menu 1.3'
  }]
}, {
  displayNm: 'Menu 2',
  klsNm: '',
  children: [{
    displayNm: 'Menu 2.1',
    children: [{
      displayNm: 'Menu 2.1.1'
    }]
  }, {
    displayNm: 'Menu 2.2'
  }, {
    displayNm: 'Menu 2.3'
  }]
}, {
  displayNm: 'Menu 3',
  klsNm: '',
  children: [{
    displayNm: 'Menu 3.1',
    children: [{
      displayNm: 'Menu 3.1.1'
    }]
  }, {
    displayNm: 'Menu 3.2',
    children: [{
      displayNm: 'Menu 3.2.1'
    }]
  }, {
    displayNm: 'Menu 3.3'
  }]
  }, {
    displayNm: 'Menu 4',
    klsNm: '',
    children: [{
      displayNm: 'Menu 4.1',
      children: [{
        displayNm: 'Menu 4.1.1'
      }, {
        displayNm: 'Menu 4.1.2'
      }, {
        displayNm: 'Menu 4.1.3'
      }]
    }, {
      displayNm: 'Menu 4.2'
    }, {
      displayNm: 'Menu 4.3'
    }]
  }, {
    displayNm: 'Menu 5',
    klsNm: '',
    children: [{
      displayNm: 'Menu 5.1',
      children: [{
        displayNm: 'Menu 5.1.1'
      }]
    }, {
      displayNm: 'Menu 5.2'
    }, {
      displayNm: 'Menu 5.3'
    }]
  }, {
    displayNm: 'Menu 6',
    klsNm: '',
    children: [{
      displayNm: 'Menu 6.1',
      children: [{
        displayNm: 'Menu 6.1.1'
      }]
    }, {
      displayNm: 'Menu 6.2',
      children: [{
        displayNm: 'Menu 6.2.1'
      }]
    }, {
      displayNm: 'Menu 6.3'
      }, {
        displayNm: 'Menu 6.4',
        klsNm: '',
        children: [{
          displayNm: 'Menu 6.4.1',
          children: [{
            displayNm: 'Menu 6.4.1.1'
          }, {
            displayNm: 'Menu 6.4.1.2'
          }, {
            displayNm: 'Menu 6.4.1.3'
          }]
        }, {
          displayNm: 'Menu 6.4.2'
        }, {
          displayNm: 'Menu 6.4.3'
        }]
      }, {
        displayNm: 'Menu 6.5',
        klsNm: '',
        children: [{
          displayNm: 'Menu 6.5.1',
          children: [{
            displayNm: 'Menu 6.5.1.1'
          }]
        }, {
          displayNm: 'Menu 6.5.2'
        }, {
          displayNm: 'Menu 6.5.3'
        }]
      }, {
        displayNm: 'Menu 6.7',
        klsNm: '',
        children: [{
          displayNm: 'Menu 6.7.1',
          children: [{
            displayNm: 'Menu 6.7.1.1',
            children: [{
              displayNm: 'Menu 6.7.1.1.1',
              children: [{
                displayNm: 'Menu 6.7.1.1.1.1'
              }, {
                displayNm: 'Menu 6.7.1.1.1.2'
              }, {
                displayNm: 'Menu 6.7.1.1.1.3'
              }]
            }, {
              displayNm: 'Menu 6.7.1.1.2'
            }, {
              displayNm: 'Menu 6.7.1.1.3'
            }]
          }]
        }, {
          displayNm: 'Menu 6.7.2',
          children: [{
            displayNm: 'Menu 6.7.2.1'
          }]
        }, {
          displayNm: 'Menu 6.7.3'
        }]
      }]
  }];

function createListItem(dataItem) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = dataItem.displayNm;
  a.className = dataItem.klsNm || 'nav-link';
  a.addEventListener('click', onClick);

  if (dataItem.children && dataItem.children.length > 0) {
    const ul = createListElement(dataItem.children);
    ul.className += ' nav-child'; 
    ul.className += ' hidden';
    a.appendChild(ul);
  }

  li.appendChild(a);
  return li;
}



function createListElement(menu) {
  const ul = document.createElement('ul');
  ul.className = 'main-nav';
  ul.addEventListener('click', function(e){
    e.stopPropagation();
  })

  for (const item of menu) {
    const li = createListItem(item);
    ul.appendChild(li);
  }
  return ul;
}

function createDynamicMenu(parent, items) {
  const list = createListElement(items);
  // const list2 = createListElement(items);
  // list2.id = 'second';
  // nav.appendChild(list);
  parent.appendChild(list);
  // nav.insertBefore(list2, list);
  // nav.parentElement.appendChild(list2);
  // nav.append(list);
}

const nav = document.querySelector('#nav');

createDynamicMenu(nav, data);

// create a table 

const tableBtn = document.getElementById('tbl-btn'); // or document.querySelector('#tbl-btn'); 

tableBtn.addEventListener('click', function () {
  alert('did you click me?');
  const table = createTable(tabledata);
  document.querySelector('#main-content').appendChild(table);
})

function createTable(data) {
  const table = document.createElement('table');
  const header = getTableHeader(data[0]);
  const body = getTableBody(data);
  table.appendChild(header);
  table.appendChild(body);
  return table;
}

function getTableBody(data) {
  const body = document.createElement('tbody');
  for (let row = 1; row < data.length; row++) {
    const rowEle = getBodyRow(data[row]);
    body.appendChild(rowEle);
  }
  return body;
}

function getBodyRow(dataRow) {
  const row = document.createElement('tr');
  for (let item of dataRow) {
    const td = document.createElement('td');
    td.textContent = item;
    row.appendChild(td);
  }
  return row;
}

function getTableHeader(data) {
  const header = document.createElement('thead');
  const headerRow = getHeaderRow(data);
  header.appendChild(headerRow);
  return header;
}

function getHeaderRow(dataRow) {

  const headerRow = document.createElement('th');

  for (const ele of dataRow) {
    const td = document.createElement('td');
    td.textContent = ele;
    headerRow.appendChild(td);
  }

  return headerRow;
}

let tabledata = [['Name', 'RollNumber', 'Age'], ['Pratik', 228, 29], ['Rahul', 229, 30]];

// event propogation or bubbling or delegation 
// by default event is propogated from inner most element to outer elements , you need to call event.stoppropogation to stop it

// event capture 

/* An alternative form of event propagation is event capture.This is like event bubbling but the order is reversed: so instead of the event firing first on the innermost element targeted, and then on successively less nested elements, the event fires first on the least nested element, and then on successively more nested elements, until the target is reached.

Event capture is disabled by default. To enable it you have to pass the capture option in addEventListener(). */


// preventDefault 
// call to stop doing default event behaviour 

const btn1_1 = document.querySelector('#btn_1_1');
const btn2_1 = document.querySelector('#btn_2_1');
const btn2_2 = document.querySelector('#btn_2_2');
const btn1_2 = document.querySelector('#btn_1_2');
const div1 = document.querySelector('#div_1');
const div2 = document.querySelector('#div_2');

function onBtnClick(event) {
  event.stopPropagation();
  console.log('Target', event.target.id);
  console.log('Current Target', event.currentTarget.id);
}

btn1_1.addEventListener('click', onBtnClick);
btn2_1.addEventListener('click', onBtnClick);
btn2_2.addEventListener('click', onBtnClick);
btn1_2.addEventListener('click', onBtnClick);
div1.addEventListener('click', onBtnClick);
div2.addEventListener('click', onBtnClick);
