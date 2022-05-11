'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">koekoe-tech-assignment-todo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-60b4ff2b1c1036e6143641675f88b05778e33f62780d9d5114f9aa0070c4f3151992d55ccc2325d8be1f8891abfd61e9eac0181460f941cbcc1e46a1e008753a"' : 'data-target="#xs-controllers-links-module-AppModule-60b4ff2b1c1036e6143641675f88b05778e33f62780d9d5114f9aa0070c4f3151992d55ccc2325d8be1f8891abfd61e9eac0181460f941cbcc1e46a1e008753a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-60b4ff2b1c1036e6143641675f88b05778e33f62780d9d5114f9aa0070c4f3151992d55ccc2325d8be1f8891abfd61e9eac0181460f941cbcc1e46a1e008753a"' :
                                            'id="xs-controllers-links-module-AppModule-60b4ff2b1c1036e6143641675f88b05778e33f62780d9d5114f9aa0070c4f3151992d55ccc2325d8be1f8891abfd61e9eac0181460f941cbcc1e46a1e008753a"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-60b4ff2b1c1036e6143641675f88b05778e33f62780d9d5114f9aa0070c4f3151992d55ccc2325d8be1f8891abfd61e9eac0181460f941cbcc1e46a1e008753a"' : 'data-target="#xs-injectables-links-module-AppModule-60b4ff2b1c1036e6143641675f88b05778e33f62780d9d5114f9aa0070c4f3151992d55ccc2325d8be1f8891abfd61e9eac0181460f941cbcc1e46a1e008753a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-60b4ff2b1c1036e6143641675f88b05778e33f62780d9d5114f9aa0070c4f3151992d55ccc2325d8be1f8891abfd61e9eac0181460f941cbcc1e46a1e008753a"' :
                                        'id="xs-injectables-links-module-AppModule-60b4ff2b1c1036e6143641675f88b05778e33f62780d9d5114f9aa0070c4f3151992d55ccc2325d8be1f8891abfd61e9eac0181460f941cbcc1e46a1e008753a"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-f269348c8cbf209bc037e657415cc4bfd8bb625656d474431e044686bc13b36bf41d5d2e9dfd5ea89b6e9fd676ea326cd29ed6208fc36b02c2dc2f7badd48b64"' : 'data-target="#xs-controllers-links-module-AuthModule-f269348c8cbf209bc037e657415cc4bfd8bb625656d474431e044686bc13b36bf41d5d2e9dfd5ea89b6e9fd676ea326cd29ed6208fc36b02c2dc2f7badd48b64"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-f269348c8cbf209bc037e657415cc4bfd8bb625656d474431e044686bc13b36bf41d5d2e9dfd5ea89b6e9fd676ea326cd29ed6208fc36b02c2dc2f7badd48b64"' :
                                            'id="xs-controllers-links-module-AuthModule-f269348c8cbf209bc037e657415cc4bfd8bb625656d474431e044686bc13b36bf41d5d2e9dfd5ea89b6e9fd676ea326cd29ed6208fc36b02c2dc2f7badd48b64"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-f269348c8cbf209bc037e657415cc4bfd8bb625656d474431e044686bc13b36bf41d5d2e9dfd5ea89b6e9fd676ea326cd29ed6208fc36b02c2dc2f7badd48b64"' : 'data-target="#xs-injectables-links-module-AuthModule-f269348c8cbf209bc037e657415cc4bfd8bb625656d474431e044686bc13b36bf41d5d2e9dfd5ea89b6e9fd676ea326cd29ed6208fc36b02c2dc2f7badd48b64"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-f269348c8cbf209bc037e657415cc4bfd8bb625656d474431e044686bc13b36bf41d5d2e9dfd5ea89b6e9fd676ea326cd29ed6208fc36b02c2dc2f7badd48b64"' :
                                        'id="xs-injectables-links-module-AuthModule-f269348c8cbf209bc037e657415cc4bfd8bb625656d474431e044686bc13b36bf41d5d2e9dfd5ea89b6e9fd676ea326cd29ed6208fc36b02c2dc2f7badd48b64"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TodoModule.html" data-type="entity-link" >TodoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TodoModule-e6cee06b7e82f5dca3580a466cffccd33e7324bb9bbf826674bbc5735f2b399f70911f397a7536b1dc8cdbda025bf3acabc622bfdea3d86f3ff0cff6b56f7a99"' : 'data-target="#xs-controllers-links-module-TodoModule-e6cee06b7e82f5dca3580a466cffccd33e7324bb9bbf826674bbc5735f2b399f70911f397a7536b1dc8cdbda025bf3acabc622bfdea3d86f3ff0cff6b56f7a99"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TodoModule-e6cee06b7e82f5dca3580a466cffccd33e7324bb9bbf826674bbc5735f2b399f70911f397a7536b1dc8cdbda025bf3acabc622bfdea3d86f3ff0cff6b56f7a99"' :
                                            'id="xs-controllers-links-module-TodoModule-e6cee06b7e82f5dca3580a466cffccd33e7324bb9bbf826674bbc5735f2b399f70911f397a7536b1dc8cdbda025bf3acabc622bfdea3d86f3ff0cff6b56f7a99"' }>
                                            <li class="link">
                                                <a href="controllers/TodoController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TodoModule-e6cee06b7e82f5dca3580a466cffccd33e7324bb9bbf826674bbc5735f2b399f70911f397a7536b1dc8cdbda025bf3acabc622bfdea3d86f3ff0cff6b56f7a99"' : 'data-target="#xs-injectables-links-module-TodoModule-e6cee06b7e82f5dca3580a466cffccd33e7324bb9bbf826674bbc5735f2b399f70911f397a7536b1dc8cdbda025bf3acabc622bfdea3d86f3ff0cff6b56f7a99"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TodoModule-e6cee06b7e82f5dca3580a466cffccd33e7324bb9bbf826674bbc5735f2b399f70911f397a7536b1dc8cdbda025bf3acabc622bfdea3d86f3ff0cff6b56f7a99"' :
                                        'id="xs-injectables-links-module-TodoModule-e6cee06b7e82f5dca3580a466cffccd33e7324bb9bbf826674bbc5735f2b399f70911f397a7536b1dc8cdbda025bf3acabc622bfdea3d86f3ff0cff6b56f7a99"' }>
                                        <li class="link">
                                            <a href="injectables/TodoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-76502e45dfd6b763f4fba27b8b22f38792df8b8f95effd77b75725f4677afa2904d603b909d7c47abc42e008d8a737bc9cd2873e0a3adf0be3fae07e808fe7c5"' : 'data-target="#xs-controllers-links-module-UserModule-76502e45dfd6b763f4fba27b8b22f38792df8b8f95effd77b75725f4677afa2904d603b909d7c47abc42e008d8a737bc9cd2873e0a3adf0be3fae07e808fe7c5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-76502e45dfd6b763f4fba27b8b22f38792df8b8f95effd77b75725f4677afa2904d603b909d7c47abc42e008d8a737bc9cd2873e0a3adf0be3fae07e808fe7c5"' :
                                            'id="xs-controllers-links-module-UserModule-76502e45dfd6b763f4fba27b8b22f38792df8b8f95effd77b75725f4677afa2904d603b909d7c47abc42e008d8a737bc9cd2873e0a3adf0be3fae07e808fe7c5"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-76502e45dfd6b763f4fba27b8b22f38792df8b8f95effd77b75725f4677afa2904d603b909d7c47abc42e008d8a737bc9cd2873e0a3adf0be3fae07e808fe7c5"' : 'data-target="#xs-injectables-links-module-UserModule-76502e45dfd6b763f4fba27b8b22f38792df8b8f95effd77b75725f4677afa2904d603b909d7c47abc42e008d8a737bc9cd2873e0a3adf0be3fae07e808fe7c5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-76502e45dfd6b763f4fba27b8b22f38792df8b8f95effd77b75725f4677afa2904d603b909d7c47abc42e008d8a737bc9cd2873e0a3adf0be3fae07e808fe7c5"' :
                                        'id="xs-injectables-links-module-UserModule-76502e45dfd6b763f4fba27b8b22f38792df8b8f95effd77b75725f4677afa2904d603b909d7c47abc42e008d8a737bc9cd2873e0a3adf0be3fae07e808fe7c5"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TodoController.html" data-type="entity-link" >TodoController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Todo.html" data-type="entity-link" >Todo</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthResponseDTO.html" data-type="entity-link" >AuthResponseDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTodoDto.html" data-type="entity-link" >CreateTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDTO.html" data-type="entity-link" >CreateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GlobalExceptionsFilter.html" data-type="entity-link" >GlobalExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDTO.html" data-type="entity-link" >LoginUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTodoDto.html" data-type="entity-link" >UpdateTodoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDTO.html" data-type="entity-link" >UpdateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserQueryDTO.html" data-type="entity-link" >UserQueryDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TodoService.html" data-type="entity-link" >TodoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});