class StartScene extends eui.Component implements  eui.UIComponent {

	private loadingAnim:loadingAnim
	private shakeComponent:shakeComponent
	private beer:moiveClipe

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
		this.loadingAnim.onLoad()
		this.beer.play()
	}
	
}