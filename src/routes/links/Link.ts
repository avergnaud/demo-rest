/**
 * Link hypertext
 */
export default class Link {

    constructor(href: string, templated: boolean, rel: string, method: string) {
        this.href = href;
        this.templated = templated;
        this.rel = rel;
        this.method = method;
      }

        href: string;
        templated: boolean;
        rel: string;
        method: string;

}
