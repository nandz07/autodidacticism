let p={
    name:"jhon"
}

function greet() {
    console.log("hai"+this.name)
}

p.greet=greet
p.greet()

const obj = {
    data: "Hello",
    getData: function() {
      setTimeout(() => {
        console.log(this.data); // 'this' refers to the 'obj' object
      }, 100);
    }
  };
  
  obj.getData();
  