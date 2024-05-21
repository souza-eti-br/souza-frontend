class HTML {
    a(className: string, target: string, href: string, text: string): HTMLAnchorElement {
        let a = document.createElement("a");
        a.className = className;
        a.target = target;
        a.href = href;
        a.innerText = text;
        return a;
    }
    div(className: string): HTMLDivElement {
        let div = document.createElement("div");
        div.className = className;
        return div;
    }
    img(className: string, alt: string, src: string): HTMLImageElement {
        let img = document.createElement("img");
        img.className = className;
        img.alt = alt;
        img.src = src;
        return img;
    }
    option(text: string, value: string): HTMLOptionElement {
        let option = document.createElement("option");
        option.text = text;
        option.value = value;
        return option;
    }
    select(id: string, onchage: Function): HTMLSelectElement {
        let select = document.createElement("select");
        select.id = id;
        select.addEventListener("change", () => {
            onchage(select.value);
        });
        return select;
    }
    span(): HTMLSpanElement {
        return document.createElement("span");
    }
    textNode(text: string): Text {
        return document.createTextNode(text);
    }
}

const html = new HTML();

export default html;