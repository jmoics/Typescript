// declaring an array of any datatype
var manufacturers = [{ id: 'Samsung', checked: false },
    { id: 'Motorola', checked: false },
    { id: 'Apple', checked: false },
    { id: 'Sony', checked: false }
];
console.log('Available Products are: ');
// logic to populate the above declared array's id value
for (var _i = 0, manufacturers_1 = manufacturers; _i < manufacturers_1.length; _i++) {
    var item = manufacturers_1[_i];
    console.log(item.id);
    if (item.id == "Apple") {
        console.log("Painting: " + item.id);
    }
}
