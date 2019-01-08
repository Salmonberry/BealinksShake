module playGame {
	export class StartScene extends eui.Component implements eui.UIComponent {

		private loadingAnim: loadingAnim
		private shake:moiveClipe


		private static instance: StartScene;

		public constructor() {
			super();
			StartScene.instance = this;
		}

		// protected partAdded(partName: string, instance: any): void {
		// 	super.partAdded(partName, instance);
		// }


		protected childrenCreated(): void {
			super.childrenCreated();
			this.shake.play(-1);
			this.playGamess()
		}

		public playGamess() {
			// console.log("aaa")
			
			this.loadingAnim.onLoad()
			setTimeout(()=>{
				Main.instance.gotoScene(new app.secondScene())
			},3000)
			
		}

	}
} 