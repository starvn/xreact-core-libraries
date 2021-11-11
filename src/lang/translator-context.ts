/*
 * Copyright (c) 2021 Huy Duc Dao
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class TranslatorContext {
  static context = {
    previousLocale: null,
    defaultLocale: null,
    locale: null,
    translations: {},
    renderInnerTextForMissingKeys: true,
    missingTranslationMsg: 'translation-not-found'
  };
  static registerTranslations(locale: string, translation: any) {
    this.context.translations = {
      ...this.context.translations,
      [locale]: translation
    };
  }
  static setDefaultLocale(locale: string) {
    this.context.defaultLocale = locale;
  }

  static setMissingTranslationMsg(msg: string) {
    this.context.missingTranslationMsg = msg;
  }

  static setRenderInnerTextForMissingKeys(flag: boolean) {
    this.context.renderInnerTextForMissingKeys = flag;
  }
  static setLocale(locale: string) {
    this.context.previousLocale = this.context.locale;
    this.context.locale = locale || this.context.defaultLocale;
    require('dayjs/locale/' + this.context.locale + '.js');
  }
}

export default TranslatorContext;
