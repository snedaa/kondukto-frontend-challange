
# KONDUKTO Frontend Challange 






```javascript
 const data = [
          {
              id:1,
              name: 'user 1'
          },
            {
              id:2,
              name: 'user 2'
          },
            {
              id:3,
              name: 'user 3'
          },
            {
              id:4,
              name: 'user 4'
          },
            {
              id:5,
              name: 'user 5'
          },
            {
              id:6,
              name: 'user 6'
          },
      ];


```

Şeklindeki data array’inde index’i 2 olan veriyi çıkartıp aşağıdaki hale getiren
fonksiyon nedir?


#### 1. Hedef diziyi, istenilen hale getirmek için yeni bir dizi ataması yapılarak farklı bir referansta kullanılması.

Burada eski dizi hala aynı, 
dizinin istenilen yeni hali fonksiyon sonucunda dönen yeni dizidir.
```javascript
function changeData(data, deleteIndex) {
    return data.filter((item, index) => index !== deleteIndex)
    .map(item => item.name);
}
const changedData = changeData(data, 2)
console.log(changedData) // değişen veri
console.log(data) // orijinal veri

```

#### 2. Hedef diziyi, istenilen hale getirmek için referansı değiştirmeden direkt olarak hedef dizi içinde değişiklik yapılması.

Burada hedef dizi fonksiyona girdiği zaman içeriği istenilen hale gelmiş olarak değişir.
```javascript
function changeData(data, deleteIndex) {
  data.splice(deleteIndex, 1);
  for (let i = 0; i < data.length; i++) {
    data[i] = data[i].name;
  }
}
changeData(data, 2);
console.log(data) // veri değiştirildi
```


#### 3. Hedef diziyi, istenilen hale getirmek için referansı değiştirmeden direkt olarak hedef dizi içinde değişiklik yapılması.

Burada hedef dizi fonksiyona girdiği zaman içeriği istenilen hale gelmiş olarak değişir. (2. Durum ile aynı işlevi görüyor, yöntem farklı)
```javascript
function changeData(data, deleteIndex) {
  const filteredData = data.filter((item, index) => index !== deleteIndex);
  data.length = 0;
  filteredData.forEach(fd => data.push(fd.name));
}
changeData(data, 2)
console.log(data) // veri değiştirildi
```

Not: Son durumda 2 döngü kullanıldığı için 2. durumdaki yöntem daha performanslı.