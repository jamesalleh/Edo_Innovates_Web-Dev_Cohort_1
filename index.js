const data = [
  {
    date: '2019-12-13',
    group: 'person',
    type: 'domain',
    visitors: 48,
    appearanceTimeInSecs: 986,
  },
  {
    date: '2019-12-13',
    group: 'person',
    type: 'domain',
    visitors: 98,
    appearanceTimeInSecs: 734,
  },
  {
    date: '2019-12-13',
    group: 'person',
    type: 'domain',
    visitors: 146,
    appearanceTimeInSecs: 817,
  },
  {
    date: '2019-12-13',
    group: 'person',
    type: 'domain',
    visitors: 12,
    appearanceTimeInSecs: 669,
  },
  {
    date: '2019-11-27',
    group: 'person',
    type: 'domain',
    visitors: 153,
    appearanceTimeInSecs: 904,
  },
  {
    date: '2019-11-27',
    group: 'person',
    type: 'domain',
    visitors: 7,
    appearanceTimeInSecs: 1058,
  },
  {
    date: '2019-11-27',
    group: 'person',
    type: 'domain',
    visitors: 115,
    appearanceTimeInSecs: 856,
  },
  {
    date: '2019-11-27',
    group: 'person',
    type: 'domain',
    visitors: 38,
    appearanceTimeInSecs: 1049,
  },
  {
    date: '2019-11-28',
    group: 'animal',
    type: 'domain',
    visitors: 74,
    appearanceTimeInSecs: 510,
  },
  {
    date: '2019-11-28',
    group: 'animal',
    type: 'domain',
    visitors: 2,
    appearanceTimeInSecs: 269,
  },
  {
    date: '2019-11-28',
    group: 'animal',
    type: 'domain',
    visitors: 19,
    appearanceTimeInSecs: 564,
  },
  {
    date: '2019-11-28',
    group: 'animal',
    type: 'domain',
    visitors: 55,
    appearanceTimeInSecs: 491,
  },
  {
    date: '2019-11-27',
    group: 'animal',
    type: 'domain',
    visitors: 14,
    appearanceTimeInSecs: 1188,
  },
  {
    date: '2019-11-27',
    group: 'bird',
    type: 'domain',
    visitors: 65,
    appearanceTimeInSecs: 478,
  },
  {
    date: '2019-11-27',
    group: 'bird',
    type: 'domain',
    visitors: 79,
    appearanceTimeInSecs: 604,
  },
  {
    date: '2019-11-27',
    group: 'bird',
    type: 'domain',
    visitors: 2,
    appearanceTimeInSecs: 2405,
  },
  {
    date: '2019-12-02',
    group: 'bird',
    type: 'domain',
    visitors: 23,
    appearanceTimeInSecs: 729,
  },
  {
    date: '2019-12-02',
    group: 'bird',
    type: 'domain',
    visitors: 122,
    appearanceTimeInSecs: 652,
  },
  {
    date: '2019-12-02',
    group: 'bird',
    type: 'domain',
    visitors: 99,
    appearanceTimeInSecs: 635,
  },
  {
    date: '2019-12-13',
    group: 'animal',
    type: 'domain',
    visitors: 101,
    appearanceTimeInSecs: 519,
  },
  {
    date: '2019-12-13',
    group: 'animal',
    type: 'domain',
    visitors: 5,
    appearanceTimeInSecs: 200,
  },
  {
    date: '2019-12-13',
    group: 'animal',
    type: 'domain',
    visitors: 21,
    appearanceTimeInSecs: 407,
  },
  {
    date: '2019-12-13',
    group: 'animal',
    type: 'domain',
    visitors: 80,
    appearanceTimeInSecs: 548,
  },
  {
    date: '2019-12-01',
    group: 'person',
    type: 'domain',
    visitors: 90,
    appearanceTimeInSecs: 1448,
  },
  {
    date: '2019-12-01',
    group: 'person',
    type: 'domain',
    visitors: 128,
    appearanceTimeInSecs: 1406,
  },
  {
    date: '2019-12-01',
    group: 'fish',
    type: 'domain',
    visitors: 4,
    appearanceTimeInSecs: 2186,
  }, {
    date: '2019-12-01',
    group: 'person',
    type: 'domain',
    visitors: 38,
    appearanceTimeInSecs: 1306,
  },
  {
    date: '2019-11-29',
    group: 'person',
    type: 'domain',
    visitors: 200,
    appearanceTimeInSecs: 1164,
  },
  {
    date: '2019-11-29',
    group: 'fish',
    type: 'domain',
    visitors: 7,
    appearanceTimeInSecs: 1221,
  },
  {
    date: '2019-11-29',
    group: 'fish',
    type: 'domain',
    visitors: 155,
    appearanceTimeInSecs: 1258,
  },
  {
    date: '2019-11-29',
    group: 'fish',
    type: 'domain',
    visitors: 45,
    appearanceTimeInSecs: 840,
  },
  {
    date: '2019-12-14',
    group: 'animal',
    type: 'domain',
    visitors: 55,
    appearanceTimeInSecs: 444,
  },
];

//  created dates range
const uniqueDates = [...new Set(data.map((item) => item.date))];
uniqueDates.sort();
console.log(uniqueDates.sort());

// created the table requested with a sum of all visitors under thesame group
const map =  new Map ();
data.forEach((item) => {
  const entry = map.get(item.group);
  if (!entry) {
    map.set(item.group, {
      group: item.group,
      visitors: item.visitors,
      appearanceTimeInSecs: item.appearanceTimeInSecs,
    });
  }else {
    entry.visitors += item.visitors;
    entry.appearanceTimeInSecs += item.appearanceTimeInSecs;
  }
  
});
const uniqueData = [...map.values()]

console.log(uniqueData);

const allVisitors = data.reduce((a,b) => a + (b.visitors || 0), 0);

// calculated the rates and converted the time to mins
uniqueData.forEach ((item)=>{
  item.rate = `${((item.visitors / allVisitors) * 100).toFixed(1)}%`;
  item.min = parseFloat ((item.appearanceTimeInSecs / 60).toFixed(1));
});


// sorted them in alphabetical order
const result = uniqueData.sort((a,b) => b.group < a.group ? 1 : -1);

console.log(uniqueData);