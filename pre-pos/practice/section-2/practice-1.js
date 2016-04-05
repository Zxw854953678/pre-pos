function count_same_elements(collection) {
  //在这里写入代码
  var letterStat = [];
  var tem = collection[0];
  var j = 0;
  letterStat = [{key:tem, count:1}];

  for(var i = 1; i < collection.length; i++){

  	if (collection[i] == tem) 
  		letterStat[j].count++;
  	
  	else {
  		tem = collection[i];
  		j++;
  		letterStat.push({key:tem,count:1});
  	}
  }

  return letterStat;
}

