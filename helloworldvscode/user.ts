class Foo{
    static alertName(firstName: string,...restOfName: string[]){
        alert (firstName+" "+restOfName.join(" "));        
    }    
}
Foo.alertName("Mr", "John", "Doe");

