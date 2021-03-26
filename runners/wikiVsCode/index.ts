import { Playbook } from "../../engine/playbook";
import { WikiRunner } from "../../engine/wikiRunner";

export class WikiVsCode extends WikiRunner {

    init(playbook: Playbook): void {
        super.init(playbook);
    }

    async destroy(playbook: Playbook): Promise<void> {
        super.destroy(playbook);
    }
}