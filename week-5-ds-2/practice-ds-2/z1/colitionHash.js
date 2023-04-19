class HashTable{
    constructor(size){
        this.size=size
        this.table=new Array(size)
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total
    }

    set(key,value){
        const index=this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }
        else{
             const sameKeyItem=bucket.find(item=>item[0]===key)
             if(sameKeyItem){
                sameKeyItem[1]=value
             }
             else{
                bucket.push([key,value])
             }
        }
    }
    get(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        const sameKeyItem=bucket.find(item=>item[0]===key)
        if(sameKeyItem){
            return sameKeyItem[1]
        }
        return undefined
    }
    remove(key){
        const index=this.hash(key)
        const bucket =this.table[index]
        const sameKeyItem=bucket.find(item=>item[0]===key)
        if(sameKeyItem){
            bucket.splice(bucket.indexOf(sameKeyItem),1)
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i]);
            }
        }
    }
}

const table=new HashTable(50)
table.set("name","nandu")
table.set("mane","nandu")
table.set("mane","slakjhaldfh")
table.set("age",19)
table.display()
table.remove("name")
table.display()
console.log(table.get("age"));
