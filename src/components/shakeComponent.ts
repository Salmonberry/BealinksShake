class shakeComponent extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.movieClip();
		
	}

	private movieClip(){
		var data=RES.getRes("shake_json");
		var txtr=RES.getRes("shake_png");
		var mcFactory:egret.MovieClipDataFactory=new egret.MovieClipDataFactory(data,txtr);

		var mc1:egret.MovieClip=new egret.MovieClip(mcFactory.generateMovieClipData("shake"));
		this.addChild(mc1);
		mc1.play(-1);
	}
	
}