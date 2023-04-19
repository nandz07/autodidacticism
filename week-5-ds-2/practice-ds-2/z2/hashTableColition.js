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
        return total % this.size
    }
    set(key,value){
        const index=this.hash(key)
        const bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                bucket[1]=value
            }else{
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
    remove(){
        const index=this.hash(key)

    }
    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }

}
let table=new HashTable(50)
table.set("name","nandu")
table.set("mane","aju")
table.set("age",25)
table.print()
console.log(table.get("mane"));
