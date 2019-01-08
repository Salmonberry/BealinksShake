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

	private  _num:number;

	public get texture(): number {
		return this._num;
	}

	public set texture(value: number) {
		this._num = value;
	}

	public onLoad(){
		this.loading.play(1)
	}
	
}