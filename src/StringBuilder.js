function StringBuilder() {

    this._ReturnValue = [];

    this.Append = function(s){ 
        this["_ReturnValue"].push( (typeof s == "undefined" ? "" : s) ); 
    };


    this.AppendLine = function(s, o){

        if(typeof o == "undefined"){
    		this.Append( (s || "") +  "\r\n"); 
    	}else{
    		this.AppendFormat( s, o ) + "\r\n";
    	}

    };

    this.AppendFormat = function(s, o){ 
    	var t = s;
    	for(var i = 0; i < o.length; i++)
    		t = t.split("{" + i + "}").join(o[i]);
    	this.Append(t);
    };
    
    this.Remove(ln){
        var n = []
        for(var i = 0; i < this["_ReturnValue"].length; i++){
            if(ln != i){
                n.push(this["_ReturnValue"][i]);
            }
        }
    };

    this.ToString = function(){ return this["_ReturnValue"].join(""); };

    this.Clear = function(){ this["_ReturnValue"] = []; } ;

    this.Replace = function(s,b){ 
    	var t = this.ToString().join().split(s).join(b);
    	this.Clear();
    	this.Append(t);	
    };
    
    this.Count(){
        return this["_ReturnValue"].length;
    };
    
    this.Length(){
        return this.Count();
    };
    
    this.ReplaceLine = function(ln,s){ 
    	this["_ReturnValue"][ln] = s;	
    };

}
