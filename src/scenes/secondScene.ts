module app {
	export class secondScene extends eui.Component implements eui.UIComponent {

		private step: number = 6;
		private graf: moiveClipe;
		private sliver: eui.Image;
		private MaxHeight: number = 294;
		private MinHeight: number = 0;
		private grabHeight: number = 0;
		private num: number = 0;//記錄點擊次數
		private currentHeight: number = 0;
		private key = false;//判斷當前是否發生點擊
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}


		protected childrenCreated(): void {
			super.childrenCreated();
			this.sliver.width = 0
			this.sliver.maxWidth = this.MaxHeight
			this.sliver.minWidth = this.MinHeight;
			this.graf.play(-1)
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUpdateHeight, this)
			this.onGlide();
		}

		private onUpdateHeight(): void {
			this.key = true;
			this.onGlide();
		}

		private onGlide(): void {
			if (this.key) {
				if (this.currentHeight < 286) {
					this.currentHeight = this.currentHeight + this.step
					this.sliver.width = this.currentHeight;
				}
				else{
					this.sliver.width=this.currentHeight
				}

				this.key = !this.key;
			}
			else {
				setInterval(() => {
					this.sliver.width = this.sliver.width - this.step;
				}, 2000)
			}
		}

		public noteifyGameComplete(){
			if(this.sliver.width==286){
				console.log("complete")
			}
		}
	}
}
