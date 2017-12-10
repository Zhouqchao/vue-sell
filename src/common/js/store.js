export function saveToLocal(id,key,val){
  let seller = window.localStorage.__seller__;
  // 第一次访问创建seller对象
  if(!seller){
    seller = {};
    seller[id] = {};
    seller[id][key] = val;
  }else{ // 再次访问直接获取localStorage中的seller对象
    seller = JSON.parse(seller);
    if(!seller[id]){
      seller[id] = {};
    }
  }
  seller[id][key] = val;
  window.localStorage.__seller__ = JSON.stringify(seller);
}

export function loadFromLocal(id,key,def){
  let seller = window.localStorage.__seller__;
  // 第一次localStorage中没有seller
  if(!seller){
    return def;
  }
  seller = JSON.parse(seller)[id];
  if(!seller){
    return def;
  }
  let res = seller[key];
  return res || def;
}
