function StringBuilder() {

    this.r = [];

    this.Append = function(s){ 
        this.r.push( (typeof s == "undefined" ? "" : s) ); 
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
    
    this.Remove = function(ln){
        var n = []
        for(var i = 0; i < this.r.length; i++){
            if(ln != i){
                n.push(this.r[i]);
            }
        }
    };

    this.ToString = function(){ return this.r.join(""); };

    this.Clear = function(){ this.r = []; } ;

    this.Replace = function(s,b){ 
    	var t = this.ToString().join().split(s).join(b);
    	this.Clear();
    	this.Append(t);	
    };
    
    this.Count = function(){
        return this.r.length;
    };
    
    this.Length = function(){
        return this.Count();
    };
    
    this.ReplaceLine = function(ln,s){ 
    	this.r[ln] = s;	
    };

}