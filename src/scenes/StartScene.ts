class StartScene extends eui.Component implements eui.UIComponent {

	private loadingAnim: loadingAnim
	private shake: moiveClipe
	public constructor() {
		super();
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		this.shake.play(-1);
		this.playGame()
	}

	public playGame(): void {
		this.loadingAnim.onLoad()
		setTimeout(() => {
			Main.instance.gotoScene(new secondScene())
		}, 3000)
	}

}