module Gamestart {
	export class StartScene extends eui.Component implements eui.UIComponent {

		private loadingAnim: loadingAnim
		private shake: moiveClipe
		public static instance: StartScene

		public constructor() {
			super();
			StartScene.instance = this;
		}

		protected childrenCreated(): void {
			super.childrenCreated();
			this.shake.play(-1);
			// this.playGamess()
		}

		public playGame(): void {
			this.loadingAnim.onLoad()
			setTimeout(() => {
				Main.instance.gotoScene(new secondScene())
			}, 3000)

		}

	}
} 