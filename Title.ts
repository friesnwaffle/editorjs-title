import slugify from 'slugify';

interface TitleData {
    text: string;
    slug: string;
}

interface TitleConstructor {
    data?: TitleData;
}

class Title {
    private data: TitleData;
    private wrapper: HTMLElement;

    constructor({ data }: TitleConstructor) {
        this.data = data || { text: '', slug: '' };
        this.wrapper = document.createElement('h1');
        this.initializeStyles();
    }

    static get toolbox() {
        return {
            title: 'Title',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.5 7h-4q-.625 0-1.062-.437T5 5.5t.438-1.062T6.5 4h11q.625 0 1.063.438T19 5.5t-.437 1.063T17.5 7h-4v11.5q0 .625-.437 1.063T12 20t-1.062-.437T10.5 18.5z"/></svg>', // Add your icon SVG here
        };
    }

    private initializeStyles() {
        this.wrapper.style.margin = '0';
        this.wrapper.style.outline = 'none';
    }

    render(): HTMLElement {
        return this.wrapper;
    }

    save(blockContent: HTMLElement): TitleData {
        const text = blockContent.innerHTML;
        const slug = slugify(text, { lower: true });
        return {
            text,
            slug,
        };
    }

    validate(savedData: TitleData): boolean {
        return savedData.text.trim().length > 0;
    }
}