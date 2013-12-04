function StringBuilder() {

    this._ReturnValue = [];

    this.Append = function(s){ 
        this["_ReturnValue"].push( (typeof s == "undefined" ? "" : s) ); 
    };


    this.AppendLine = function(s, o){

        if(typeof o == "undefined"){
    		this.Append( s ); 
    	}else{
    		this.AppendFormat( s, o );
    	}
    	this.Append( "\r\n" ); 
    };

    this.AppendFormat = function(s, o){ 
    	var t = s;
    	for(var i = 0; i < o.length; i++)
    		t = t.split("{" + i + "}").join(o[i]);
    	this.Append(t);
    };

    this.ToString = function(){ return this["_ReturnValue"].join(""); };

    this.Clear = function(){ this["_ReturnValue"] = []; } ;

    this.Replace = function(s,b){ 
    	var t = this.ToString().join().split(s).join(b);
    	this.Clear();
    	this.Append(t);	
    };

}