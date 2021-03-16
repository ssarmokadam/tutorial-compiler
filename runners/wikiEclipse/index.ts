import { Playbook } from "../../engine/playbook";
import { WikiRunner } from "../../engine/wikiRunner";

export class WikiEclipse extends WikiRunner {

    init(playbook: Playbook): void {
        super.init(playbook);
    }

    destroy(playbook: Playbook): void {
        super.destroy(playbook);
    }
}