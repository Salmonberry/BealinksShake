class loadingAnim extends eui.Component implements  eui.UIComponent {

	private loading:egret.tween.TweenGroup

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
	}

	public onLoad(){
		this.loading.play()
	}
	
}