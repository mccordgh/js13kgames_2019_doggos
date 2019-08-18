import { Menu } from './menu';

export class Ending extends Menu {
  constructor(handler){
    super(handler);
  }

  render(g) {
    console.log('ENDINGGGGG');
    // super.draw(g, [
    //     'ahhh FiNaLLy ouT',
    //     'Oh my, our best one yet..',
    //     '',
    //     '',
    //   ]
    // );
  }

  getInput() {
    // if (this.handler.getKeyManager().enter) {
    //   window.location.reload();
    // }
  }
}
