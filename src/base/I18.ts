module late{

    export type I18Lang = 'en' | 'es';

    export type I18String = {
        [lang in I18Lang]: string;
    }

    export class I18 {

        static defaultLang: I18Lang = 'en';

        static lang: I18Lang = 'en';

        static resolve(str: I18String): string{
            if (I18.lang in str && !!str[I18.lang]){
                return str[I18.lang];

            }else if (I18.defaultLang in str) {
                return str[I18.defaultLang];

            }else if(!I18.lang){
                console.warn(`No lang specified. Set I18.lang = "en"`)

            }else{
                console.warn(`Not found lang "${I18.lang}"`)
            }
        }
    }
}
