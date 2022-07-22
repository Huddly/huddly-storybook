(self.webpackChunk_huddly_component_library = self.webpackChunk_huddly_component_library || []).push([
  [179],
  {
    './generated-stories-entry.js': function (module, __unused_webpack_exports, __webpack_require__) {
      'use strict';
      (module = __webpack_require__.nmd(module)),
        (0, __webpack_require__('./node_modules/@storybook/react/dist/esm/client/index.js').configure)(
          [
            __webpack_require__(
              './src/stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$'
            ),
            __webpack_require__(
              './src/stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$'
            ),
          ],
          module,
          !1
        );
    },
    './src/stories/Documentation/About.stories.mdx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __page: function () {
            return __page;
          },
        });
      __webpack_require__('./node_modules/react/index.js');
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/@mdx-js/react/dist/esm.js'),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/esm/index.js'
        );
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(
          'wrapper',
          _extends({}, layoutProps, props, { components: components, mdxType: 'MDXLayout' }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_, {
            title: 'Documentation/About',
            mdxType: 'Meta',
          }),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(
            'h1',
            { id: 'welcome-to-storybook' },
            'Welcome to Storybook'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(
            'p',
            null,
            "Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)('strong', { parentName: 'p' }, 'stories'),
            ' to revisit during development, testing, or QA.'
          ),
          (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(
            'p',
            null,
            'Browse example stories now by navigating to them in the sidebar.\nView their code in the ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)('inlineCode', { parentName: 'p' }, 'src/stories'),
            ' directory to learn how they work.\nWe recommend building UIs with a ',
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://componentdriven.org',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)('strong', { parentName: 'a' }, 'component-driven')
            ),
            ' process starting with atomic components and ending with pages.'
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      const __page = () => {
        throw new Error('Docs-only story');
      };
      __page.parameters = { docsOnly: !0 };
      const componentMeta = { title: 'Documentation/About', includeStories: ['__page'] },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(
              _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,
              { mdxStoryNameToKey: mdxStoryNameToKey, mdxComponentAnnotations: componentMeta },
              (0, _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent, null)
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    './src/stories/Forms/Button/Button.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: function () {
            return Primary;
          },
          Secondary: function () {
            return Secondary;
          },
        });
      var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Forms/Button/index.tsx');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__.z };
      var Primary = { args: { type: 'button', children: 'Click me' } },
        Secondary = { args: { type: 'button', children: 'Click me', secondary: !0 } };
    },
    './src/stories/Forms/Checkbox/Checkbox.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Checked: function () {
            return Checked;
          },
          HasError: function () {
            return HasError;
          },
          HasHint: function () {
            return HasHint;
          },
          InWrapper: function () {
            return InWrapper;
          },
          Primary: function () {
            return Primary;
          },
        });
      var _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Forms/Checkbox/index.tsx'),
        _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__.X };
      var Primary = {
          args: {
            id: 'example',
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
              {
                children: [
                  'Confirm that you have read and accepted our',
                  ' ',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('a', {
                    href: '#',
                    children: 'Privacy Policy',
                  }),
                  ' and ',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('a', {
                    href: '#',
                    children: 'Terms of Service',
                  }),
                  '.',
                ],
              }
            ),
          },
        },
        Checked = {
          args: (0,
          _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              Primary.args
            ),
            {},
            { value: !0 }
          ),
        },
        Template = function Template(_ref) {
          var alert = _ref.alert,
            children = _ref.children,
            hint = _ref.hint,
            id = _ref.id,
            isRequired = _ref.isRequired;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.SP, {
            alert: alert,
            hint: hint,
            id: id,
            isRequired: isRequired,
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_0__.X, {
              children: children,
            }),
          });
        },
        InWrapper = Template.bind({});
      InWrapper.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        {},
        Primary.args
      );
      var HasHint = Template.bind({});
      HasHint.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          Primary.args
        ),
        {},
        { hint: 'This is a hint.' }
      );
      var HasError = Template.bind({});
      (HasError.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          Primary.args
        ),
        {},
        { alert: 'This is an error message.' }
      )),
        (InWrapper.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                '({ alert, children, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Checkbox>{children}</Checkbox>\n    </InputWrapper>\n  );\n}',
            },
          },
          InWrapper.parameters
        )),
        (HasHint.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                '({ alert, children, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Checkbox>{children}</Checkbox>\n    </InputWrapper>\n  );\n}',
            },
          },
          HasHint.parameters
        )),
        (HasError.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                '({ alert, children, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Checkbox>{children}</Checkbox>\n    </InputWrapper>\n  );\n}',
            },
          },
          HasError.parameters
        ));
    },
    './src/stories/Forms/Fieldset/Fieldset.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: function () {
            return Primary;
          },
        });
      var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Forms/Fieldset/index.tsx'),
        _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__.p };
      var Primary = {
        args: {
          legend: 'Personal Information',
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_1__.kC, {
                  columnGap: 16,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_1__.SP, {
                      id: 'fname',
                      isRequired: !0,
                      alert: 'Test',
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _index__WEBPACK_IMPORTED_MODULE_1__.__,
                          { children: 'First name' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _index__WEBPACK_IMPORTED_MODULE_1__.II,
                          {}
                        ),
                      ],
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_1__.SP, {
                      id: 'lname',
                      isRequired: !0,
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _index__WEBPACK_IMPORTED_MODULE_1__.__,
                          { children: 'Last name' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                          _index__WEBPACK_IMPORTED_MODULE_1__.II,
                          {}
                        ),
                      ],
                    }),
                  ],
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_1__.SP, {
                  id: 'email',
                  isRequired: !0,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.__, {
                      children: 'Email',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.II, {
                      type: 'email',
                    }),
                  ],
                }),
              ],
            }
          ),
        },
      };
    },
    './src/stories/Forms/Form/Form.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: function () {
            return Primary;
          },
          default: function () {
            return Form_stories;
          },
        });
      var _templateObject,
        objectSpread2 = __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        objectWithoutProperties = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['children'],
        FormElement = styled_components_browser_esm.ZP.form(
          _templateObject || (_templateObject = (0, taggedTemplateLiteral.Z)(['\n  /* Your styles here */\n']))
        ),
        Form = function Form(props) {
          var children = props.children,
            additionalFormProps = (0, objectWithoutProperties.Z)(props, _excluded);
          return (0, jsx_runtime.jsx)(
            FormElement,
            (0, objectSpread2.Z)((0, objectSpread2.Z)({}, additionalFormProps), {}, { children: children })
          );
        };
      try {
        (Form.displayName = 'Form'),
          (Form.__docgenInfo = { description: 'Form component', displayName: 'Form', props: {} }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Forms/Form/index.tsx#Form'] = {
              docgenInfo: Form.__docgenInfo,
              name: 'Form',
              path: 'src/stories/Forms/Form/index.tsx#Form',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Form_stories = { component: Form },
        Primary = { args: { children: 'This is a form element' } };
    },
    './src/stories/Forms/Input/Input.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          HasError: function () {
            return HasError;
          },
          HasHint: function () {
            return HasHint;
          },
          InWrapper: function () {
            return InWrapper;
          },
          Primary: function () {
            return Primary;
          },
        });
      var _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Forms/Input/index.tsx'),
        _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__.I };
      var Primary = { args: { id: 'example' } },
        Template = function Template(_ref) {
          var alert = _ref.alert,
            hint = _ref.hint,
            id = _ref.id,
            isRequired = _ref.isRequired;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_1__.SP, {
            alert: alert,
            hint: hint,
            id: id,
            isRequired: isRequired,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.__, {
                children: 'Label',
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_0__.I, {}),
            ],
          });
        },
        InWrapper = Template.bind({});
      InWrapper.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        {},
        Primary.args
      );
      var HasHint = Template.bind({});
      HasHint.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          Primary.args
        ),
        {},
        { hint: 'This is a hint.' }
      );
      var HasError = Template.bind({});
      (HasError.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          Primary.args
        ),
        {},
        { alert: 'This is an error message.' }
      )),
        (InWrapper.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                '({ alert, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Label>Label</Label>\n      <Input />\n    </InputWrapper>\n  );\n}',
            },
          },
          InWrapper.parameters
        )),
        (HasHint.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                '({ alert, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Label>Label</Label>\n      <Input />\n    </InputWrapper>\n  );\n}',
            },
          },
          HasHint.parameters
        )),
        (HasError.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                '({ alert, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Label>Label</Label>\n      <Input />\n    </InputWrapper>\n  );\n}',
            },
          },
          HasError.parameters
        ));
    },
    './src/stories/Forms/InputWrapper/InputWrapper.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          HasError: function () {
            return HasError;
          },
          HasHint: function () {
            return HasHint;
          },
          Primary: function () {
            return Primary;
          },
        });
      var _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Forms/InputWrapper/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__.S };
      var Template = function Template(_ref) {
          var alert = _ref.alert,
            children = _ref.children,
            hint = _ref.hint,
            id = _ref.id,
            isRequired = _ref.isRequired;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_0__.S, {
            alert: alert,
            hint: hint,
            id: id,
            isRequired: isRequired,
            children: children,
          });
        },
        Primary = Template.bind({});
      Primary.args = {
        id: 'example',
        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
          {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('p', {
                children: 'You can have whatever input inside this compontent.',
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('p', {
                children:
                  'The compontent will pass props down to its children as needed to handle helper texts, error states etc...',
              }),
            ],
          }
        ),
      };
      var HasHint = Template.bind({});
      HasHint.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Primary.args
        ),
        {},
        { hint: 'This is a hint' }
      );
      var HasError = Template.bind({});
      (HasError.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
        (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {},
          Primary.args
        ),
        {},
        { alert: 'This is an error message.' }
      )),
        (Primary.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({ alert, children, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      {children}\n    </InputWrapper>\n  );\n}',
            },
          },
          Primary.parameters
        )),
        (HasHint.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({ alert, children, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      {children}\n    </InputWrapper>\n  );\n}',
            },
          },
          HasHint.parameters
        )),
        (HasError.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          {
            storySource: {
              source:
                '({ alert, children, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      {children}\n    </InputWrapper>\n  );\n}',
            },
          },
          HasError.parameters
        ));
    },
    './src/stories/Forms/Label/Label.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: function () {
            return Primary;
          },
        });
      var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Forms/Label/index.tsx');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__._ };
      var Primary = {
        args: { htmlFor: 'name', children: 'Your name', isRequired: !0, helpLabel: 'A help link', helpLink: '#' },
      };
    },
    './src/stories/Forms/Radio/Radio.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Checked: function () {
            return Checked;
          },
          HasError: function () {
            return HasError;
          },
          HasHint: function () {
            return HasHint;
          },
          InWrapper: function () {
            return InWrapper;
          },
          Primary: function () {
            return Primary;
          },
        });
      var _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Forms/Radio/index.tsx'),
        _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__.Y };
      var Primary = {
          args: {
            id: 'example',
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
              {
                children: [
                  'Confirm that you have read and accepted our',
                  ' ',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('a', {
                    href: '#',
                    children: 'Privacy Policy',
                  }),
                  ' and ',
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('a', {
                    href: '#',
                    children: 'Terms of Service',
                  }),
                  '.',
                ],
              }
            ),
          },
        },
        Checked = {
          args: (0,
          _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              {},
              Primary.args
            ),
            {},
            { value: !0 }
          ),
        },
        Template = function Template(_ref) {
          var alert = _ref.alert,
            children = _ref.children,
            hint = _ref.hint,
            id = _ref.id,
            isRequired = _ref.isRequired;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.SP, {
            alert: alert,
            hint: hint,
            id: id,
            isRequired: isRequired,
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_0__.Y, {
              children: children,
            }),
          });
        },
        InWrapper = Template.bind({});
      InWrapper.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        {},
        Primary.args
      );
      var HasHint = Template.bind({});
      HasHint.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          Primary.args
        ),
        {},
        { hint: 'This is a hint.' }
      );
      var HasError = Template.bind({});
      (HasError.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          Primary.args
        ),
        {},
        { alert: 'This is an error message.' }
      )),
        (InWrapper.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                '({ alert, children, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Radio>{children}</Radio>\n    </InputWrapper>\n  );\n}',
            },
          },
          InWrapper.parameters
        )),
        (HasHint.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                '({ alert, children, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Radio>{children}</Radio>\n    </InputWrapper>\n  );\n}',
            },
          },
          HasHint.parameters
        )),
        (HasError.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                '({ alert, children, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Radio>{children}</Radio>\n    </InputWrapper>\n  );\n}',
            },
          },
          HasError.parameters
        ));
    },
    './src/stories/Forms/Select/Select.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          HasError: function () {
            return HasError;
          },
          HasHint: function () {
            return HasHint;
          },
          InWrapper: function () {
            return InWrapper;
          },
          Primary: function () {
            return Primary;
          },
        });
      var _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Forms/Select/index.tsx'),
        _InputWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/stories/Forms/InputWrapper/index.tsx'),
        _Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/stories/Forms/Label/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__.P };
      var Primary = { args: { id: 'example' } },
        Template = function Template(_ref) {
          var alert = _ref.alert,
            hint = _ref.hint,
            id = _ref.id,
            isRequired = _ref.isRequired;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
            _InputWrapper__WEBPACK_IMPORTED_MODULE_1__.S,
            {
              alert: alert,
              hint: hint,
              id: id,
              isRequired: isRequired,
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_2__._, {
                  children: 'Label',
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(___WEBPACK_IMPORTED_MODULE_0__.P, {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('option', { children: 'Click me' }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('option', {
                      children: 'Never gonna give you up',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('option', {
                      children: 'Never gonna let you down',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('option', {
                      children: 'Never gonna run around and desert you',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('option', {
                      children: 'Never gonna make you cry',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('option', {
                      children: 'Never gonna say goodbye',
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('option', {
                      children: 'Never gonna tell a lie and hurt you',
                    }),
                  ],
                }),
              ],
            }
          );
        },
        InWrapper = Template.bind({});
      InWrapper.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        {},
        Primary.args
      );
      var HasHint = Template.bind({});
      HasHint.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {},
          Primary.args
        ),
        {},
        { hint: 'This is a hint.' }
      );
      var HasError = Template.bind({});
      (HasError.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
        (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {},
          Primary.args
        ),
        {},
        { alert: 'This is an error message.' }
      )),
        (InWrapper.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {
            storySource: {
              source:
                '({ alert, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Label>Label</Label>\n      <Select>\n        <option>Click me</option>\n        <option>Never gonna give you up</option>\n        <option>Never gonna let you down</option>\n        <option>Never gonna run around and desert you</option>\n        <option>Never gonna make you cry</option>\n        <option>Never gonna say goodbye</option>\n        <option>Never gonna tell a lie and hurt you</option>\n      </Select>\n    </InputWrapper>\n  );\n}',
            },
          },
          InWrapper.parameters
        )),
        (HasHint.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {
            storySource: {
              source:
                '({ alert, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Label>Label</Label>\n      <Select>\n        <option>Click me</option>\n        <option>Never gonna give you up</option>\n        <option>Never gonna let you down</option>\n        <option>Never gonna run around and desert you</option>\n        <option>Never gonna make you cry</option>\n        <option>Never gonna say goodbye</option>\n        <option>Never gonna tell a lie and hurt you</option>\n      </Select>\n    </InputWrapper>\n  );\n}',
            },
          },
          HasHint.parameters
        )),
        (HasError.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
          {
            storySource: {
              source:
                '({ alert, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Label>Label</Label>\n      <Select>\n        <option>Click me</option>\n        <option>Never gonna give you up</option>\n        <option>Never gonna let you down</option>\n        <option>Never gonna run around and desert you</option>\n        <option>Never gonna make you cry</option>\n        <option>Never gonna say goodbye</option>\n        <option>Never gonna tell a lie and hurt you</option>\n      </Select>\n    </InputWrapper>\n  );\n}',
            },
          },
          HasError.parameters
        ));
    },
    './src/stories/Forms/TextArea/TextArea.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          HasError: function () {
            return HasError;
          },
          HasHint: function () {
            return HasHint;
          },
          InWrapper: function () {
            return InWrapper;
          },
          Primary: function () {
            return Primary;
          },
        });
      var _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Forms/TextArea/index.tsx'),
        _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__.K };
      var Primary = { args: { id: 'example' } },
        Template = function Template(_ref) {
          var alert = _ref.alert,
            hint = _ref.hint,
            id = _ref.id,
            isRequired = _ref.isRequired;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_1__.SP, {
            alert: alert,
            hint: hint,
            id: id,
            isRequired: isRequired,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.__, {
                children: 'Label',
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_0__.K, {}),
            ],
          });
        },
        InWrapper = Template.bind({});
      InWrapper.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        {},
        Primary.args
      );
      var HasHint = Template.bind({});
      HasHint.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          Primary.args
        ),
        {},
        { hint: 'This is a hint.' }
      );
      var HasError = Template.bind({});
      (HasError.args = (0,
      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
        (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {},
          Primary.args
        ),
        {},
        { alert: 'This is an error message.' }
      )),
        (InWrapper.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                '({ alert, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Label>Label</Label>\n      <TextArea />\n    </InputWrapper>\n  );\n}',
            },
          },
          InWrapper.parameters
        )),
        (HasHint.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                '({ alert, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Label>Label</Label>\n      <TextArea />\n    </InputWrapper>\n  );\n}',
            },
          },
          HasHint.parameters
        )),
        (HasError.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                '({ alert, hint, id, isRequired }) => {\n  return (\n    <InputWrapper alert={alert} hint={hint} id={id} isRequired={isRequired}>\n      <Label>Label</Label>\n      <TextArea />\n    </InputWrapper>\n  );\n}',
            },
          },
          HasError.parameters
        ));
    },
    './src/stories/Foundation/AlertText/AlertText.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ErrorAlert: function () {
            return ErrorAlert;
          },
          InfoAlert: function () {
            return InfoAlert;
          },
          SuccessAlert: function () {
            return SuccessAlert;
          },
          WarningAlert: function () {
            return WarningAlert;
          },
        });
      var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Foundation/AlertText/index.tsx');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__.Q };
      var SuccessAlert = { args: { severity: 'success', children: 'This is a success message' } },
        InfoAlert = { args: { severity: 'info', children: 'This is an info message' } },
        WarningAlert = { args: { severity: 'warning', children: 'This is a warning message' } },
        ErrorAlert = { args: { severity: 'error', children: 'This is an error message' } };
    },
    './src/stories/Foundation/Badge/Badge.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: function () {
            return Primary;
          },
          TitleExample: function () {
            return TitleExample;
          },
        });
      var _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Foundation/Badge/index.tsx'),
        _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__.C };
      var Primary = { args: { children: 'Badge' } },
        TitleExample = function TitleExampleTemplate(_ref) {
          var children = _ref.children;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_1__.kC, {
            align: 'center',
            columnGap: 8,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.xv, {
                type: 'h2',
                size: '28',
                children: 'Huddly L1',
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_0__.C, {
                children: children,
              }),
            ],
          });
        }.bind({});
      (TitleExample.args = { children: 'New' }),
        (TitleExample.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          {
            storySource: {
              source:
                "({ children }) => {\n  return (\n    <Flex align='center' columnGap={8}>\n      <Text type='h2' size='28'>\n        Huddly L1\n      </Text>\n      <Badge>{children}</Badge>\n    </Flex>\n  );\n}",
            },
          },
          TitleExample.parameters
        ));
      try {
        (Primary.displayName = 'Primary'),
          (Primary.__docgenInfo = {
            description: "This is the default story.\nIt renders the Badge, and that's about it.",
            displayName: 'Primary',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Badge/Badge.stories.tsx#Primary'] = {
              docgenInfo: Primary.__docgenInfo,
              name: 'Primary',
              path: 'src/stories/Foundation/Badge/Badge.stories.tsx#Primary',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/Card/Card.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          LavenderCard: function () {
            return LavenderCard;
          },
        });
      __webpack_require__('./node_modules/react/index.js');
      var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/stories/Foundation/Card/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_1__.Z };
      var LavenderCard = {
        args: {
          children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', { children: 'Text in card' }),
          background: 'lavender',
        },
      };
    },
    './src/stories/Foundation/ColorBox/ColorBox.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Overview: function () {
            return Overview;
          },
        });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/stories/Foundation/ColorBox/index.tsx'),
        _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/stories/Foundation/Text/index.tsx'),
        _shared_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./src/shared/colors.ts'),
        _Flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./src/stories/Foundation/Flex/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_1__.k };
      var StyledColor = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(___WEBPACK_IMPORTED_MODULE_1__.k)(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  height: 150px;\n  width: 150px;\n  display: Flex;\n  justify-content: center;\n  align-items: center;\n',
              ]
            ))
        ),
        Overview = function OverviewTemplate() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_4__.k, {
            columnGap: 4,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_4__.k, {
                direction: 'column',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.x, {
                    size: '16',
                    children: 'Blue Tones',
                  }),
                  Object.keys(_shared_colors__WEBPACK_IMPORTED_MODULE_3__.Dt).map(function (key) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledColor, { color: key, children: key }, key);
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_4__.k, {
                direction: 'column',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.x, {
                    size: '16',
                    children: 'Yellow Tones',
                  }),
                  Object.keys(_shared_colors__WEBPACK_IMPORTED_MODULE_3__.p8).map(function (key) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledColor, { color: key, children: key }, key);
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_4__.k, {
                direction: 'column',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.x, {
                    size: '16',
                    children: 'Brown Tones',
                  }),
                  Object.keys(_shared_colors__WEBPACK_IMPORTED_MODULE_3__.xT).map(function (key) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledColor, { color: key, children: key }, key);
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_4__.k, {
                direction: 'column',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.x, {
                    size: '16',
                    children: 'Taupe Tones',
                  }),
                  Object.keys(_shared_colors__WEBPACK_IMPORTED_MODULE_3__.J_).map(function (key) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledColor, { color: key, children: key }, key);
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_4__.k, {
                direction: 'column',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.x, {
                    size: '16',
                    children: 'Pink Tones',
                  }),
                  Object.keys(_shared_colors__WEBPACK_IMPORTED_MODULE_3__.F).map(function (key) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledColor, { color: key, children: key }, key);
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_4__.k, {
                direction: 'column',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.x, {
                    size: '16',
                    children: 'Orange Tones',
                  }),
                  Object.keys(_shared_colors__WEBPACK_IMPORTED_MODULE_3__.gn).map(function (key) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledColor, { color: key, children: key }, key);
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_4__.k, {
                direction: 'column',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.x, {
                    size: '16',
                    children: 'Green Tones',
                  }),
                  Object.keys(_shared_colors__WEBPACK_IMPORTED_MODULE_3__.oC).map(function (key) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledColor, { color: key, children: key }, key);
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_4__.k, {
                direction: 'column',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.x, {
                    size: '16',
                    children: 'Dark Gray Tones',
                  }),
                  Object.keys(_shared_colors__WEBPACK_IMPORTED_MODULE_3__.d0).map(function (key) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledColor, { color: key, children: key }, key);
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_4__.k, {
                direction: 'column',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.x, {
                    size: '16',
                    children: 'Bright Gray Tones',
                  }),
                  Object.keys(_shared_colors__WEBPACK_IMPORTED_MODULE_3__.Sk).map(function (key) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledColor, { color: key, children: key }, key);
                  }),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Flex__WEBPACK_IMPORTED_MODULE_4__.k, {
                direction: 'column',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_2__.x, {
                    size: '16',
                    children: 'Signal Scale Tones',
                  }),
                  Object.keys(_shared_colors__WEBPACK_IMPORTED_MODULE_3__.Ok).map(function (key) {
                    return (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledColor, { color: key, children: key }, key);
                  }),
                ],
              }),
            ],
          });
        }.bind({});
      (Overview.args = {}),
        (Overview.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
          {
            storySource: {
              source:
                "() => {\n  return (\n    <Flex columnGap={4}>\n      <Flex direction='column'>\n        <Text size='16'>Blue Tones</Text>\n        {Object.keys(BlueTonesEnum).map((key: BlueTones) => (\n          <StyledColor key={key} color={key}>\n            {key}\n          </StyledColor>\n        ))}\n      </Flex>\n      <Flex direction='column'>\n        <Text size='16'>Yellow Tones</Text>\n        {Object.keys(YellowTonesEnum).map((key: YellowTones) => (\n          <StyledColor key={key} color={key}>\n            {key}\n          </StyledColor>\n        ))}\n      </Flex>\n      <Flex direction='column'>\n        <Text size='16'>Brown Tones</Text>\n        {Object.keys(BrownTonesEnum).map((key: BrownTones) => (\n          <StyledColor key={key} color={key}>\n            {key}\n          </StyledColor>\n        ))}\n      </Flex>\n      <Flex direction='column'>\n        <Text size='16'>Taupe Tones</Text>\n        {Object.keys(TaupeTonesEnum).map((key: TaupeTones) => (\n          <StyledColor key={key} color={key}>\n            {key}\n          </StyledColor>\n        ))}\n      </Flex>\n      <Flex direction='column'>\n        <Text size='16'>Pink Tones</Text>\n        {Object.keys(PinkTonesEnum).map((key: PinkTones) => (\n          <StyledColor key={key} color={key}>\n            {key}\n          </StyledColor>\n        ))}\n      </Flex>\n      <Flex direction='column'>\n        <Text size='16'>Orange Tones</Text>\n        {Object.keys(OrangeTonesEnum).map((key: OrangeTones) => (\n          <StyledColor key={key} color={key}>\n            {key}\n          </StyledColor>\n        ))}\n      </Flex>\n      <Flex direction='column'>\n        <Text size='16'>Green Tones</Text>\n        {Object.keys(GreenTonesEnum).map((key: GreenTones) => (\n          <StyledColor key={key} color={key}>\n            {key}\n          </StyledColor>\n        ))}\n      </Flex>\n      <Flex direction='column'>\n        <Text size='16'>Dark Gray Tones</Text>\n        {Object.keys(DarkGrayTonesEnum).map((key: DarkGrayTones) => (\n          <StyledColor key={key} color={key}>\n            {key}\n          </StyledColor>\n        ))}\n      </Flex>\n      <Flex direction='column'>\n        <Text size='16'>Bright Gray Tones</Text>\n        {Object.keys(BrightGrayTonesEnum).map((key: BrightGrayTones) => (\n          <StyledColor key={key} color={key}>\n            {key}\n          </StyledColor>\n        ))}\n      </Flex>\n      <Flex direction='column'>\n        <Text size='16'>Signal Scale Tones</Text>\n        {Object.keys(SignalScaleTonesEnum).map((key: SignalScaleTones) => (\n          <StyledColor key={key} color={key}>\n            {key}\n          </StyledColor>\n        ))}\n      </Flex>\n    </Flex>\n  );\n}",
            },
          },
          Overview.parameters
        ));
    },
    './src/stories/Foundation/Flex/Flex.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          DirectionColumn: function () {
            return DirectionColumn;
          },
          DirectionRow: function () {
            return DirectionRow;
          },
        });
      __webpack_require__('./node_modules/react/index.js');
      var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/stories/Foundation/Flex/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_1__.k };
      var placeholderStyles = {
          display: 'grid',
          width: '100px',
          height: '100px',
          color: 'var(--color-white)',
          backgroundColor: 'var(--color-lavender)',
          placeItems: 'center',
        },
        DirectionRow = {
          args: {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                    style: placeholderStyles,
                    children: '1',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                    style: placeholderStyles,
                    children: '2',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                    style: placeholderStyles,
                    children: '3',
                  }),
                ],
              }
            ),
            columnGap: 16,
            direction: 'row',
          },
        },
        DirectionColumn = {
          args: {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                    style: placeholderStyles,
                    children: '1',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                    style: placeholderStyles,
                    children: '2',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                    style: placeholderStyles,
                    children: '3',
                  }),
                ],
              }
            ),
            rowGap: 16,
            direction: 'column',
          },
        };
    },
    './src/stories/Foundation/Grid/Grid.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Grid2x2: function () {
            return Grid2x2;
          },
          GridWithGridItems: function () {
            return GridWithGridItems;
          },
        });
      __webpack_require__('./node_modules/react/index.js');
      var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/stories/Foundation/Grid/index.tsx'),
        _GridItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/stories/Foundation/GridItem/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_1__.r };
      var placeholderStyles = { color: 'var(--color-white)', backgroundColor: 'var(--color-lavender)' },
        Grid2x2 = {
          args: {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('div', {
                    style: placeholderStyles,
                    children: '1',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('div', {
                    style: placeholderStyles,
                    children: '2',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('div', {
                    style: placeholderStyles,
                    children: '3',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('div', {
                    style: placeholderStyles,
                    children: '4',
                  }),
                ],
              }
            ),
            columnGap: 16,
            rowGap: 16,
            columns: '200px 200px',
            rows: '200px 200px',
            alignItems: 'stretch',
            justifyItems: 'stretch',
          },
        },
        boxStyle = {
          height: '100%',
          width: '100%',
          color: 'var(--color-white)',
          backgroundColor: 'var(--color-lavender)',
        },
        GridWithGridItems = {
          args: {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_GridItem__WEBPACK_IMPORTED_MODULE_2__.P, {
                    alignSelf: 'start',
                    justifySelf: 'start',
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('div', {
                      style: boxStyle,
                      children: 'Start aligned',
                    }),
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_GridItem__WEBPACK_IMPORTED_MODULE_2__.P, {
                    alignSelf: 'end',
                    justifySelf: 'end',
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('div', {
                      style: boxStyle,
                      children: 'End aligned',
                    }),
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_GridItem__WEBPACK_IMPORTED_MODULE_2__.P, {
                    alignSelf: 'center',
                    justifySelf: 'center',
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('div', {
                      style: boxStyle,
                      children: 'Center aligned',
                    }),
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_GridItem__WEBPACK_IMPORTED_MODULE_2__.P, {
                    alignSelf: 'stretch',
                    justifySelf: 'stretch',
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('div', {
                      style: boxStyle,
                      children: 'Stretched',
                    }),
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_GridItem__WEBPACK_IMPORTED_MODULE_2__.P, {
                    alignSelf: 'stretch',
                    justifySelf: 'stretch',
                    columnStart: 3,
                    rowStart: 3,
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)('div', {
                      style: boxStyle,
                      children: 'Placed in column 3 row 3',
                    }),
                  }),
                ],
              }
            ),
            rowGap: 16,
            columns: '150px 150px 150px 150px',
            rows: '150px 150px 150px 150px',
            alignItems: 'stretch',
            justifyItems: 'stretch',
          },
        };
    },
    './src/stories/Foundation/GridItem/GridItem.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Grid2x2: function () {
            return Grid2x2;
          },
        });
      __webpack_require__('./node_modules/react/index.js');
      var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/stories/Foundation/GridItem/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_1__.P };
      var placeholderStyles = { color: 'var(--color-white)', backgroundColor: 'var(--color-lavender)' },
        Grid2x2 = {
          args: {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                    style: placeholderStyles,
                    children: '1',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                    style: placeholderStyles,
                    children: '2',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                    style: placeholderStyles,
                    children: '3',
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                    style: placeholderStyles,
                    children: '4',
                  }),
                ],
              }
            ),
            columnGap: 16,
            rowGap: 16,
            columns: '200px 200px',
            rows: '200px 200px',
            alignItems: 'stretch',
            justifyItems: 'stretch',
          },
        };
    },
    './src/stories/Foundation/Icon/Icon.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Overview: function () {
            return Overview;
          },
          default: function () {
            return Icon_stories;
          },
        });
      var _templateObject,
        _templateObject2,
        objectSpread2 = __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        slicedToArray = __webpack_require__('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        react = __webpack_require__('./node_modules/react/index.js'),
        Icon = __webpack_require__('./src/stories/Foundation/Icon/index.tsx'),
        components = __webpack_require__('./src/stories/Foundation/Icon/components/index.ts'),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 90px;\n  padding: var(--spacing-16);\n  border-radius: var(--border-radius);\n  color: var(--color-grayText);\n  cursor: pointer;\n  row-gap: var(--spacing-16);\n  aspect-ratio: 1;\n\n  &:hover,\n  &:focus {\n    background-color: var(--color-grey35);\n  }\n\n  ',
              ';\n',
            ])),
          function (_ref) {
            return (
              _ref.darkBg &&
              'background-color: var(--color-grey35);\n    color: var(--color-white);\n    \n    &:hover, &:focus {\n      background-color: var(--color-black);\n    }'
            );
          }
        ),
        Label = styled_components_browser_esm.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  width: 100%;\n  font-size: var(--font-size-12);\n  text-align: center;\n  // Truncate text to fit in the box\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n',
            ]))
        ),
        copyIconJsx = function copyIconJsx(children) {
          var iconChild = Array.isArray(children)
            ? children.find(function (child) {
                return child.type === Icon.J;
              })
            : children;
          if (!iconChild) throw new Error('IconDisplay expects an icon');
          var jsx = (function generateIconJsx(child) {
            if ('object' != typeof child) return null;
            var displayName = child.type.displayName || 'Icon',
              propsAttributes = Object.keys(child.props)
                .filter(function (prop) {
                  return void 0 !== child.props[prop];
                })
                .map(function (prop) {
                  return ''.concat(prop, '="').concat(child.props[prop], '"');
                });
            return '<'.concat(displayName, ' ').concat(propsAttributes.join(' '), ' />');
          })(iconChild);
          !(function copyStringToClipboard(str) {
            var tmp = document.createElement('textarea');
            (tmp.value = str),
              document.body.appendChild(tmp),
              tmp.select(),
              document.execCommand('copy'),
              document.body.removeChild(tmp);
          })(jsx),
            alert('Copied to clipboard:\n'.concat(jsx));
        },
        IconDisplay = function IconDisplay(_ref2) {
          var children = _ref2.children,
            darkBg = _ref2.darkBg,
            label = _ref2.label;
          return (0, jsx_runtime.jsxs)(Wrapper, {
            darkBg: darkBg,
            onClick: function onClick() {
              return copyIconJsx(children);
            },
            title: label,
            children: [
              (0, jsx_runtime.jsx)('div', { children: children }),
              (0, jsx_runtime.jsx)(Label, { children: label }),
            ],
          });
        };
      try {
        (IconDisplay.displayName = 'IconDisplay'),
          (IconDisplay.__docgenInfo = {
            description: 'This component is used to display an icon in storybook.',
            displayName: 'IconDisplay',
            props: {
              label: { defaultValue: null, description: '', name: 'label', required: !0, type: { name: 'string' } },
              darkBg: { defaultValue: null, description: '', name: 'darkBg', required: !1, type: { name: 'boolean' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Storybook/IconDisplay/index.tsx#IconDisplay'] = {
              docgenInfo: IconDisplay.__docgenInfo,
              name: 'IconDisplay',
              path: 'src/stories/Storybook/IconDisplay/index.tsx#IconDisplay',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var src = __webpack_require__('./src/index.ts'),
        Icon_stories = { component: Icon.J, argTypes: { name: { control: { type: 'hidden' } } } },
        Overview = function OverviewTemplate(_ref) {
          var color = _ref.color,
            initialIcons = Object.keys(components).sort(),
            _useState = (0, react.useState)(initialIcons),
            _useState2 = (0, slicedToArray.Z)(_useState, 2),
            iconResults = _useState2[0],
            setIconResults = _useState2[1];
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsxs)(src.SP, {
                id: 'search',
                isRequired: !0,
                children: [
                  (0, jsx_runtime.jsx)(src.__, { children: 'Filter icons' }),
                  (0, jsx_runtime.jsx)(src.II, {
                    placeholder: 'Search ...',
                    onChange: function filter(e) {
                      var value = e.target.value,
                        filteredIcons = initialIcons.filter(function (icon) {
                          return icon.toLowerCase().includes(value.toLowerCase());
                        });
                      setIconResults(filteredIcons);
                    },
                  }),
                ],
              }),
              (0, jsx_runtime.jsx)(src.kC, {
                columnGap: 24,
                rowGap: 16,
                wrap: 'wrap',
                children: iconResults.map(function (name) {
                  return (0,
                  jsx_runtime.jsx)(IconDisplay, { label: name, darkBg: 'white' === color, children: (0, jsx_runtime.jsx)(Icon.J, { name: name, color: color }) }, name);
                }),
              }),
            ],
          });
        }.bind({});
      (Overview.args = { color: 'black' }),
        (Overview.parameters = (0, objectSpread2.Z)(
          {
            storySource: {
              source:
                "({ color }) => {\n  const initialIcons: Array<keyof typeof icons> = Object.keys(\n    icons\n  ).sort() as Array<keyof typeof icons>;\n  const [iconResults, setIconResults] = useState(initialIcons);\n\n  const filter = (e) => {\n    const value = e.target.value;\n    const filteredIcons = initialIcons.filter((icon) =>\n      icon.toLowerCase().includes(value.toLowerCase())\n    );\n    setIconResults(filteredIcons);\n  };\n\n  return (\n    <>\n      <InputWrapper id='search' isRequired>\n        <Label>Filter icons</Label>\n        <Input placeholder='Search ...' onChange={filter} />\n      </InputWrapper>\n\n      <Flex columnGap={24} rowGap={16} wrap='wrap'>\n        {iconResults.map((name) => (\n          <IconDisplay key={name} label={name} darkBg={color === 'white'}>\n            <Icon name={name} color={color} />\n          </IconDisplay>\n        ))}\n      </Flex>\n    </>\n  );\n}",
            },
          },
          Overview.parameters
        ));
    },
    './src/stories/Foundation/IconButton/IconButton.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Overview: function () {
            return Overview;
          },
        });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Foundation/Grid/index.tsx'),
        _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/stories/Foundation/Text/index.tsx'),
        styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/stories/Foundation/IconButton/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_2__.h };
      var Wrapper = (0, styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP)(_Grid__WEBPACK_IMPORTED_MODULE_0__.r)(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              ['\n  padding: var(--spacing-8);\n']
            ))
        ),
        Overview = function OverviewTemplate(props) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Wrapper, {
            columnGap: 32,
            rowGap: 32,
            columns: '50px 50px',
            justifyItems: 'center',
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_1__.x, {
                size: '18',
                bold: !0,
                children: 'Button',
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_1__.x, {
                size: '18',
                bold: !0,
                children: 'Loading',
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                ___WEBPACK_IMPORTED_MODULE_2__.h,
                (0,
                _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                  {},
                  props
                )
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                ___WEBPACK_IMPORTED_MODULE_2__.h,
                (0,
                _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                  (0,
                  _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                    {},
                    props
                  ),
                  {},
                  { loading: !0 }
                )
              ),
            ],
          });
        }.bind({});
      (Overview.args = { type: 'iconButton', children: 'Click me', icon: 'Edit', tooltipText: 'Edit' }),
        (Overview.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
          {
            storySource: {
              source:
                "(props) => {\n  return (\n    <Wrapper\n      columnGap={32}\n      rowGap={32}\n      columns='50px 50px'\n      justifyItems='center'\n    >\n      <Text size='18' bold>\n        Button\n      </Text>\n      <Text size='18' bold>\n        Loading\n      </Text>\n      <IconButton {...props} />\n      <IconButton {...props} loading />\n    </Wrapper>\n  );\n}",
            },
          },
          Overview.parameters
        ));
    },
    './src/stories/Foundation/Spinner/Spinner.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: function () {
            return Primary;
          },
        });
      var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Foundation/Spinner/index.tsx');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__.$ };
      var Primary = { args: { color: 'black', size: '32' } };
    },
    './src/stories/Foundation/Table/Table.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          StandardTable: function () {
            return StandardTable;
          },
        });
      var _templateObject,
        _templateObject2,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Foundation/Table/index.tsx'),
        _Forms_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/stories/Forms/Input/index.tsx'),
        _Forms_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/stories/Forms/Select/index.tsx'),
        _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./src/stories/Foundation/Text/index.tsx'),
        react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/react/index.js'),
        _Forms_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./src/stories/Forms/Checkbox/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        UL = styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.ul(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
              ['\n  padding: 0;\n  margin: 0;\n']
            ))
        ),
        LI = styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.li(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
              ['\n  list-style-type: none;\n  display: inline;\n  margin: 0;\n  padding: 0;\n']
            ))
        );
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__.i };
      var columns = [
          {
            columnKey: 'name',
            header: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                    _Forms_Checkbox__WEBPACK_IMPORTED_MODULE_5__.X,
                    { id: 'name' }
                  ),
                  'Name',
                ],
              }
            ),
            align: 'left',
            valueFormatter: function valueFormatter(row) {
              var _row$name;
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                _Forms_Checkbox__WEBPACK_IMPORTED_MODULE_5__.X,
                {
                  id: 'name_'.concat(row.name),
                  children: null !== (_row$name = row.name) && void 0 !== _row$name ? _row$name : '',
                }
              );
            },
            editFormatter: function editFormatter(row, _onChange) {
              var _row$name2;
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                _Forms_Input__WEBPACK_IMPORTED_MODULE_1__.I,
                {
                  id: 'name',
                  onChange: function onChange(e) {
                    return _onChange(
                      (0,
                      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                        (0,
                        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                          {},
                          row
                        ),
                        {},
                        { name: e.target.value }
                      )
                    );
                  },
                  value: null !== (_row$name2 = row.name) && void 0 !== _row$name2 ? _row$name2 : '',
                }
              );
            },
            isSortable: !0,
          },
          {
            columnKey: 'office',
            header: 'Current office',
            align: 'left',
            valueFormatter: function valueFormatter(row) {
              var _row$office;
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_3__.x, {
                color: 'lavender',
                children: null !== (_row$office = row.office) && void 0 !== _row$office ? _row$office : '',
              });
            },
            editFormatter: function editFormatter(row, _onChange2) {
              var _row$office2;
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
                _Forms_Input__WEBPACK_IMPORTED_MODULE_1__.I,
                {
                  id: 'office',
                  value: null !== (_row$office2 = row.office) && void 0 !== _row$office2 ? _row$office2 : '',
                  onChange: function onChange(e) {
                    return _onChange2(
                      (0,
                      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                        (0,
                        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                          {},
                          row
                        ),
                        {},
                        { office: e.target.value }
                      )
                    );
                  },
                }
              );
            },
          },
          {
            columnKey: 'fruits',
            header: 'Fruits',
            align: 'left',
            valueFormatter: function valueFormatter(row) {
              var value = row.fruits;
              return value && Array.isArray(value)
                ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(UL, {
                    children: value.map(function (v, i) {
                      return (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(LI, { children: [v, i !== value.length - 1 && ', '] }, v);
                    }),
                  })
                : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)('div', {});
            },
          },
          {
            columnKey: 'timeZone',
            header: 'Time Zone',
            align: 'right',
            editFormatter: function editFormatter(row, _onChange3) {
              return row.timeZone
                ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(
                    _Forms_Select__WEBPACK_IMPORTED_MODULE_2__.P,
                    {
                      id: 'timeZone',
                      value: row.timeZone,
                      onChange: function onChange(e) {
                        return _onChange3(
                          (0,
                          _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                            (0,
                            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                              {},
                              row
                            ),
                            {},
                            { timeZone: e.target.value }
                          )
                        );
                      },
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)('option', { children: 'UTC +1' }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)('option', { children: 'UTC +2' }),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)('option', { children: 'UTC +3' }),
                      ],
                    }
                  )
                : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)('div', {});
            },
            isSortable: !0,
          },
        ],
        ROWS = [
          { id: 'A123', name: '', office: '', fruits: [], timeZone: 'UTC +1', isNewRow: !0, isEditable: !0 },
          {
            id: 'B123',
            name: 'Bob',
            office: 'Vacation',
            fruits: ['Apple', 'Orange', 'Banana'],
            timeZone: 'UTC +1',
            isEditable: !0,
          },
          { id: 'C123', name: 'Karen', office: 'In office', fruits: ['Banana'], timeZone: 'UTC +1', isEditable: !0 },
          { id: 'D123', name: 'Lars', office: 'At home', fruits: ['Orange'], timeZone: 'UTC +1', isEditable: !0 },
        ],
        StandardTable = function Template(props) {
          var _useState = (0, react__WEBPACK_IMPORTED_MODULE_4__.useState)({ field: 'name', direction: 'ASC' }),
            _useState2 = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__.Z)(
              _useState,
              2
            ),
            ordering = _useState2[0],
            setOrdering = _useState2[1],
            _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_4__.useState)(ROWS),
            _useState4 = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__.Z)(
              _useState3,
              2
            ),
            rows = _useState4[0],
            setRows = _useState4[1];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(
            ___WEBPACK_IMPORTED_MODULE_0__.i,
            (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
              (0,
              _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
                {},
                props
              ),
              {},
              {
                rows: rows,
                setOrdering: setOrdering,
                ordering: ordering,
                columns: columns,
                removeRow: function removeRow(rowId) {
                  setRows(
                    rows.filter(function (r) {
                      return r.id !== rowId;
                    })
                  );
                },
              }
            )
          );
        }.bind({});
      (StandardTable.args = {
        fullWidth: !0,
        onSave: function onSave(row) {
          return console.log(row);
        },
        onSaveNewRow: function onSaveNewRow(row) {
          return console.log(row);
        },
        showNewRow: !0,
      }),
        (StandardTable.parameters = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)(
          {
            storySource: {
              source:
                "(props) => {\n  const [ordering, setOrdering] = useState({ field: 'name', direction: 'ASC' });\n  const [rows, setRows] = useState(ROWS);\n  const removeRow = (rowId: string) => {\n    setRows(rows.filter((r) => r.id !== rowId));\n  };\n  return (\n    <Table\n      {...props}\n      rows={rows}\n      setOrdering={setOrdering}\n      ordering={ordering}\n      columns={columns}\n      removeRow={removeRow}\n    />\n  );\n}",
            },
          },
          StandardTable.parameters
        ));
    },
    './src/stories/Foundation/Text/Text.stories.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          MessinaSansBold: function () {
            return MessinaSansBold;
          },
          MessinaSansRegular: function () {
            return MessinaSansRegular;
          },
        });
      var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/stories/Foundation/Text/index.tsx');
      __webpack_exports__.default = { component: ___WEBPACK_IMPORTED_MODULE_0__.x };
      var MessinaSansRegular = { args: { children: 'Hello this is text' } },
        MessinaSansBold = { args: { bold: !0, children: 'Hello this is text' } };
    },
    './.storybook/preview.js-generated-config-entry.js': function (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, {
          decorators: function () {
            return decorators;
          },
          parameters: function () {
            return parameters;
          },
        });
      var ClientApi = __webpack_require__('./node_modules/@storybook/client-api/dist/esm/ClientApi.js'),
        esm = __webpack_require__('./node_modules/@storybook/client-logger/dist/esm/index.js'),
        global = (__webpack_require__('./node_modules/react/index.js'), __webpack_require__('./src/shared/global.ts')),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        decorators = [
          function (Story) {
            return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [(0, jsx_runtime.jsx)(global.n, {}), (0, jsx_runtime.jsx)(Story, {})],
            });
          },
        ],
        parameters = { actions: { argTypesRegex: '^on[A-Z].*' } };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.kg.warn('Invalid args/argTypes in config, ignoring.', JSON.stringify(value));
          case 'decorators':
            return value.forEach(function (decorator) {
              return (0, ClientApi.$9)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return (0, ClientApi.HZ)(loader, !1);
            });
          case 'parameters':
            return (0, ClientApi.h1)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi.My)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi._C)(enhancer);
            });
          case 'render':
            return (0, ClientApi.$P)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), (0, ClientApi.h1)(v, !1);
          case '__namedExportsOrder':
          case 'decorateStory':
          case 'renderToDOM':
            return null;
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    './src/index.ts': function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        II: function () {
          return _stories_Forms_Input__WEBPACK_IMPORTED_MODULE_5__.I;
        },
        QP: function () {
          return _stories_Foundation_AlertText__WEBPACK_IMPORTED_MODULE_11__.Q;
        },
        SP: function () {
          return _stories_Forms_InputWrapper__WEBPACK_IMPORTED_MODULE_6__.S;
        },
        XZ: function () {
          return _stories_Forms_Checkbox__WEBPACK_IMPORTED_MODULE_3__.X;
        },
        Y8: function () {
          return _stories_Forms_Radio__WEBPACK_IMPORTED_MODULE_8__.Y;
        },
        __: function () {
          return _stories_Forms_Label__WEBPACK_IMPORTED_MODULE_7__._;
        },
        kC: function () {
          return _stories_Foundation_Flex__WEBPACK_IMPORTED_MODULE_15__.k;
        },
        xv: function () {
          return _stories_Foundation_Text__WEBPACK_IMPORTED_MODULE_23__.x;
        },
      });
      __webpack_require__('./src/shared/global.ts'),
        __webpack_require__('./src/shared/colors.ts'),
        __webpack_require__('./src/stories/Forms/Button/index.tsx');
      var _stories_Forms_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './src/stories/Forms/Checkbox/index.tsx'
        ),
        _stories_Forms_Input__WEBPACK_IMPORTED_MODULE_5__ =
          (__webpack_require__('./src/stories/Forms/Fieldset/index.tsx'),
          __webpack_require__('./src/stories/Forms/Input/index.tsx')),
        _stories_Forms_InputWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './src/stories/Forms/InputWrapper/index.tsx'
        ),
        _stories_Forms_Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('./src/stories/Forms/Label/index.tsx'),
        _stories_Forms_Radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('./src/stories/Forms/Radio/index.tsx'),
        _stories_Foundation_AlertText__WEBPACK_IMPORTED_MODULE_11__ =
          (__webpack_require__('./src/stories/Forms/Select/index.tsx'),
          __webpack_require__('./src/stories/Forms/TextArea/index.tsx'),
          __webpack_require__('./src/stories/Foundation/AlertText/index.tsx')),
        _stories_Foundation_Flex__WEBPACK_IMPORTED_MODULE_15__ =
          (__webpack_require__('./src/stories/Foundation/Badge/index.tsx'),
          __webpack_require__('./src/stories/Foundation/Card/index.tsx'),
          __webpack_require__('./src/stories/Foundation/ColorBox/index.tsx'),
          __webpack_require__('./src/stories/Foundation/Flex/index.tsx')),
        _stories_Foundation_Text__WEBPACK_IMPORTED_MODULE_23__ =
          (__webpack_require__('./src/stories/Foundation/Grid/index.tsx'),
          __webpack_require__('./src/stories/Foundation/GridItem/index.tsx'),
          __webpack_require__('./src/stories/Foundation/Icon/index.tsx'),
          __webpack_require__('./src/stories/Foundation/IconButton/index.tsx'),
          __webpack_require__('./src/stories/Foundation/Spinner/index.tsx'),
          __webpack_require__('./src/stories/Foundation/Table/index.tsx'),
          __webpack_require__('./src/stories/Foundation/Table/TableRow.tsx'),
          __webpack_require__('./src/stories/Foundation/Text/index.tsx'));
    },
    './src/shared/colors.ts': function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        $S: function () {
          return GreenTonesHtml;
        },
        CZ: function () {
          return TaupeTonesHtml;
        },
        Dt: function () {
          return BlueTonesEnum;
        },
        F: function () {
          return PinkTonesEnum;
        },
        J_: function () {
          return TaupeTonesEnum;
        },
        Mj: function () {
          return WhiteHtml;
        },
        Ok: function () {
          return SignalScaleTonesEnum;
        },
        P5: function () {
          return BrownTonesHtml;
        },
        SI: function () {
          return SignalScaleTonesHtml;
        },
        Sk: function () {
          return BrightGrayTonesEnum;
        },
        TA: function () {
          return YellowTonesHtml;
        },
        Xv: function () {
          return getHexColor;
        },
        c: function () {
          return BrightGrayTonesHtml;
        },
        d0: function () {
          return DarkGrayTonesEnum;
        },
        e$: function () {
          return PinkTonesHtml;
        },
        gn: function () {
          return OrangeTonesEnum;
        },
        iv: function () {
          return OrangeTonesHtml;
        },
        oC: function () {
          return GreenTonesEnum;
        },
        p8: function () {
          return YellowTonesEnum;
        },
        sT: function () {
          return DarkGrayTonesHtml;
        },
        xT: function () {
          return BrownTonesEnum;
        },
        zN: function () {
          return BlueTonesHtml;
        },
      });
      var BlueTonesEnum,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        getColorHtml = function getColorHtml(colors) {
          return Object.entries(colors)
            .map(function (_ref) {
              var _ref2 = (0,
                _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
                  _ref,
                  2
                ),
                key = _ref2[0],
                value = _ref2[1];
              return '--color-'.concat(key, ': ').concat(value, ';');
            })
            .join('\n');
        };
      !(function (BlueTonesEnum) {
        (BlueTonesEnum.whisperBlue = '#E5EBFE'),
          (BlueTonesEnum.plumbagoBlue = '#A6B9FF'),
          (BlueTonesEnum.lavender = '#5B5FFF'),
          (BlueTonesEnum.salviaBlue = '#4B4FE3'),
          (BlueTonesEnum.royalBlue = '#393CBD'),
          (BlueTonesEnum.marineBlue = '#3032A6');
      })(BlueTonesEnum || (BlueTonesEnum = {}));
      var YellowTonesEnum,
        BlueTonesHtml = getColorHtml(BlueTonesEnum);
      !(function (YellowTonesEnum) {
        (YellowTonesEnum.whisperYellow = '#FFF6D4'),
          (YellowTonesEnum.cheesecakeYellow = '#FFEEA8'),
          (YellowTonesEnum.sunYellow = '#E6C669'),
          (YellowTonesEnum.dijonYellow = '#BF9A34'),
          (YellowTonesEnum.curryYellow = '#A17E25'),
          (YellowTonesEnum.autumnYellow = '#8A6A19');
      })(YellowTonesEnum || (YellowTonesEnum = {}));
      var BrownTonesEnum,
        YellowTonesHtml = getColorHtml(YellowTonesEnum);
      !(function (BrownTonesEnum) {
        (BrownTonesEnum.whisperOrange = '#FBDFBC'),
          (BrownTonesEnum.apricotOrange = '#F7BF79'),
          (BrownTonesEnum.caramelBrown = '#D3924E'),
          (BrownTonesEnum.cinnamonBrown = '#9C6127'),
          (BrownTonesEnum.leatherBrown = '#87501C'),
          (BrownTonesEnum.chocolateBrown = '#6E4117');
      })(BrownTonesEnum || (BrownTonesEnum = {}));
      var TaupeTonesEnum,
        BrownTonesHtml = getColorHtml(BrownTonesEnum);
      !(function (TaupeTonesEnum) {
        (TaupeTonesEnum.whisperTaupe = '#F6DCD2'),
          (TaupeTonesEnum.macaronTaupe = '#EDBAA6'),
          (TaupeTonesEnum.eveningTaupe = '#BA7F6B'),
          (TaupeTonesEnum.clayTaupe = '#945441'),
          (TaupeTonesEnum.chestnutTaupe = '#804636'),
          (TaupeTonesEnum.rosewoodTaupe = '#69372A');
      })(TaupeTonesEnum || (TaupeTonesEnum = {}));
      var PinkTonesEnum,
        TaupeTonesHtml = getColorHtml(TaupeTonesEnum);
      !(function (PinkTonesEnum) {
        (PinkTonesEnum.whisperPink = '#FFE2DD'),
          (PinkTonesEnum.candyflossPink = '#FFC3BA'),
          (PinkTonesEnum.petitePink = '#E39994'),
          (PinkTonesEnum.balloonPink = '#BD5C57'),
          (PinkTonesEnum.passionPink = '#A84340'),
          (PinkTonesEnum.burntPink = '#94332F');
      })(PinkTonesEnum || (PinkTonesEnum = {}));
      var OrangeTonesEnum,
        PinkTonesHtml = getColorHtml(PinkTonesEnum);
      !(function (OrangeTonesEnum) {
        (OrangeTonesEnum.whisperCoral = '#FFD5BD'),
          (OrangeTonesEnum.cantaloupeOrange = '#FFAE80'),
          (OrangeTonesEnum.papayaOrange = '#E07B4C'),
          (OrangeTonesEnum.fireOrange = '#B85227'),
          (OrangeTonesEnum.burntOrange = '#A3421C'),
          (OrangeTonesEnum.rustRed = '#8A3817');
      })(OrangeTonesEnum || (OrangeTonesEnum = {}));
      var GreenTonesEnum,
        OrangeTonesHtml = getColorHtml(OrangeTonesEnum);
      !(function (GreenTonesEnum) {
        (GreenTonesEnum.whisperGreen = '#EDEED8'),
          (GreenTonesEnum.greenTea = '#DCDEB1'),
          (GreenTonesEnum.springGreen = '#B6B77E'),
          (GreenTonesEnum.oliveGreen = '#8C8B50'),
          (GreenTonesEnum.mossGreen = '#73713F'),
          (GreenTonesEnum.oreganoGreen = '#616034');
      })(GreenTonesEnum || (GreenTonesEnum = {}));
      var DarkGrayTonesEnum,
        GreenTonesHtml = getColorHtml(GreenTonesEnum);
      !(function (DarkGrayTonesEnum) {
        (DarkGrayTonesEnum.grey45 = '#747474'),
          (DarkGrayTonesEnum.grey35 = '#595959'),
          (DarkGrayTonesEnum.grey25 = '#404040'),
          (DarkGrayTonesEnum.grey15 = '#262626'),
          (DarkGrayTonesEnum.grey10 = '#1A1A1A'),
          (DarkGrayTonesEnum.black = '#000000');
      })(DarkGrayTonesEnum || (DarkGrayTonesEnum = {}));
      var BrightGrayTonesEnum,
        DarkGrayTonesHtml = getColorHtml(DarkGrayTonesEnum);
      !(function (BrightGrayTonesEnum) {
        (BrightGrayTonesEnum.grey98 = '#FAFAFA'),
          (BrightGrayTonesEnum.grey96 = '#F5F5F5'),
          (BrightGrayTonesEnum.grey91 = '#E8E8E8'),
          (BrightGrayTonesEnum.grey86 = '#DBDBDB'),
          (BrightGrayTonesEnum.grey76 = '#C2C2C2'),
          (BrightGrayTonesEnum.grey62 = '#9E9E9E');
      })(BrightGrayTonesEnum || (BrightGrayTonesEnum = {}));
      var SignalScaleTonesEnum,
        BrightGrayTonesHtml = getColorHtml(BrightGrayTonesEnum);
      !(function (SignalScaleTonesEnum) {
        (SignalScaleTonesEnum.whisperCoral = '#FFD5BD'),
          (SignalScaleTonesEnum.coralOrange = '#FF9C6B'),
          (SignalScaleTonesEnum.signalOrange = '#EB6E3D'),
          (SignalScaleTonesEnum.intenseOrange = '#B24319'),
          (SignalScaleTonesEnum.hotOrange = '#993012'),
          (SignalScaleTonesEnum.redWine = '#7A240C');
      })(SignalScaleTonesEnum || (SignalScaleTonesEnum = {}));
      var WhiteEnum,
        SignalScaleTonesHtml = getColorHtml(SignalScaleTonesEnum);
      !(function (WhiteEnum) {
        WhiteEnum.white = '#fff';
      })(WhiteEnum || (WhiteEnum = {}));
      var StandardColorsEnum,
        WhiteHtml = getColorHtml(WhiteEnum);
      !(function (StandardColorsEnum) {
        (StandardColorsEnum[(StandardColorsEnum.black = DarkGrayTonesEnum.black)] = 'black'),
          (StandardColorsEnum[(StandardColorsEnum.lavender = BlueTonesEnum.lavender)] = 'lavender'),
          (StandardColorsEnum[(StandardColorsEnum.white = WhiteEnum.white)] = 'white');
      })(StandardColorsEnum || (StandardColorsEnum = {}));
      var SecondaryColorsEnum;
      getColorHtml(StandardColorsEnum);
      !(function (SecondaryColorsEnum) {
        (SecondaryColorsEnum[(SecondaryColorsEnum.sunYellow = YellowTonesEnum.sunYellow)] = 'sunYellow'),
          (SecondaryColorsEnum[(SecondaryColorsEnum.caramelBrown = BrownTonesEnum.caramelBrown)] = 'caramelBrown'),
          (SecondaryColorsEnum[(SecondaryColorsEnum.papayaOrange = OrangeTonesEnum.papayaOrange)] = 'papayaOrange'),
          (SecondaryColorsEnum[(SecondaryColorsEnum.eveningTaupe = TaupeTonesEnum.eveningTaupe)] = 'eveningTaupe'),
          (SecondaryColorsEnum[(SecondaryColorsEnum.petitePink = PinkTonesEnum.petitePink)] = 'petitePink'),
          (SecondaryColorsEnum[(SecondaryColorsEnum.springGreen = GreenTonesEnum.springGreen)] = 'springGreen');
      })(SecondaryColorsEnum || (SecondaryColorsEnum = {}));
      var IndicationColorsEnum;
      getColorHtml(SecondaryColorsEnum);
      !(function (IndicationColorsEnum) {
        (IndicationColorsEnum[(IndicationColorsEnum.inidiaicationRed = SignalScaleTonesEnum.signalOrange)] =
          'inidiaicationRed'),
          (IndicationColorsEnum[(IndicationColorsEnum.indicationGreen = GreenTonesEnum.springGreen)] =
            'indicationGreen');
      })(IndicationColorsEnum || (IndicationColorsEnum = {}));
      getColorHtml(IndicationColorsEnum);
      var ColorValues = (0,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
          (0,
          _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
            (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
              (0,
              _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                (0,
                _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                  (0,
                  _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                    (0,
                    _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                      (0,
                      _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                        (0,
                        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                          (0,
                          _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                            (0,
                            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
                              {},
                              BlueTonesEnum
                            ),
                            YellowTonesEnum
                          ),
                          OrangeTonesEnum
                        ),
                        TaupeTonesEnum
                      ),
                      PinkTonesEnum
                    ),
                    BrownTonesEnum
                  ),
                  GreenTonesEnum
                ),
                SignalScaleTonesEnum
              ),
              BrightGrayTonesEnum
            ),
            DarkGrayTonesEnum
          ),
          WhiteEnum
        ),
        getHexColor = function getHexColor(colorName) {
          return ColorValues[colorName];
        };
    },
    './src/shared/global.ts': function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        n: function () {
          return GlobalStyles;
        },
      });
      var _templateObject,
        global_templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        colors = __webpack_require__('./src/shared/colors.ts'),
        normalizeStyles = (0, styled_components_browser_esm.iv)(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              "\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n  /* Document\n   ========================================================================== */\n\n  /**\n   * 1. Correct the line height in all browsers.\n   * 2. Prevent adjustments of font size after orientation changes in iOS.\n   */\n\n  html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n\n  /* Sections\n   ========================================================================== */\n\n  /**\n   * Remove the margin in all browsers.\n   */\n\n  body {\n    margin: 0;\n  }\n\n  /**\n   * Render the \"main\" element consistently in IE.\n   */\n\n  main {\n    display: block;\n  }\n\n  /**\n   * Correct the font size and margin on \"h1\" elements within \"section\" and\n   * \"article\" contexts in Chrome, Firefox, and Safari.\n   */\n\n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n\n  /* Grouping content\n   ========================================================================== */\n\n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n\n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd \"em\" font sizing in all browsers.\n   */\n\n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  /* Text-level semantics\n   ========================================================================== */\n\n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n\n  a {\n    background-color: transparent;\n  }\n\n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n\n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd \"em\" font sizing in all browsers.\n   */\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n\n  /**\n   * Add the correct font size in all browsers.\n   */\n\n  small {\n    font-size: 80%;\n  }\n\n  /**\n   * Prevent \"sub\" and \"sup\" elements from affecting the line height in\n   * all browsers.\n   */\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  /* Embedded content\n   ========================================================================== */\n\n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n\n  img {\n    border-style: none;\n  }\n\n  /* Forms\n   ========================================================================== */\n\n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n\n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\n  button,\n  input {\n    /* 1 */\n    overflow: visible;\n  }\n\n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\n  button,\n  select {\n    /* 1 */\n    text-transform: none;\n  }\n\n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\n  button,\n  [type='button'],\n  [type='reset'],\n  [type='submit'] {\n    -webkit-appearance: button;\n  }\n\n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n\n  button::-moz-focus-inner,\n  [type='button']::-moz-focus-inner,\n  [type='reset']::-moz-focus-inner,\n  [type='submit']::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n\n  button:-moz-focusring,\n  [type='button']:-moz-focusring,\n  [type='reset']:-moz-focusring,\n  [type='submit']:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  /**\n   * Correct the padding in Firefox.\n   */\n\n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n\n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from \"fieldset\" elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    \"fieldset\" elements in all browsers.\n   */\n\n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n\n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\n  textarea {\n    overflow: auto;\n  }\n\n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n  [type='checkbox'],\n  [type='radio'] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n\n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n  [type='number']::-webkit-inner-spin-button,\n  [type='number']::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n  [type='search'] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n\n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n  [type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to \"inherit\" in Safari.\n   */\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n\n  /* Interactive\n   ========================================================================== */\n\n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\n  details {\n    display: block;\n  }\n\n  /*\n   * Add the correct display in all browsers.\n   */\n\n  summary {\n    display: list-item;\n  }\n\n  /* Misc\n   ========================================================================== */\n\n  /**\n   * Add the correct display in IE 10+.\n   */\n\n  template {\n    display: none;\n  }\n\n  /**\n   * Add the correct display in IE 10.\n   */\n\n  [hidden] {\n    display: none;\n  }\n",
            ]))
        ),
        GlobalStyles = (0, styled_components_browser_esm.vJ)(
          global_templateObject ||
            (global_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  /* Normalize */\n  ',
              '\n\n  :root {\n    /* Alert colors */\n    --color-warningRed: #B1060F;\n    --color-successGreen: #34C759;\n\n    ',
              '\n    ',
              '\n    ',
              '\n    ',
              '\n    ',
              '\n    ',
              '\n    ',
              '\n    ',
              '\n    ',
              '\n    ',
              '\n    ',
              '\n\n    /* Font sizes */\n    --font-size-12: 12px;\n    --font-size-14: 14px;\n    --font-size-16: 16px;\n    --font-size-18: 18px;\n    --font-size-20: 20px;\n    --font-size-22: 22px;\n    --font-size-28: 28px;\n    --font-size-48: 48px;\n    --font-size-68: 68px;\n    --font-size-98: 98px;\n\n    /* Spacing */\n    --spacing-4: 4px;\n    --spacing-8: 8px;\n    --spacing-16: 16px;\n    --spacing-24: 24px;\n    --spacing-32: 32px;\n    --spacing-40: 40px;\n    --spacing-48: 48px;\n    --spacing-56: 56px;\n    --spacing-64: 64px;\n\n    /* Borders */\n    --border-primary: 1px solid var(--color-grey62);\n    --border-error: 2px solid var(--color-hotOrange);\n\n    /* Border radius */\n    --border-radius: 6px;\n\n    /* Fonts */\n    --font-family-primary: "Messina sans", Helvetica, Arial, sans-serif;\n  }\n\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: var(--font-family-primary);\n  }\n\n  /* Import fonts */\n  @font-face {\n    font-family: "Messina sans";\n    src: url("/fonts/Messina-sans/MessinaSansWeb-Regular.woff2") format(\'woff2\'),\n      url("/fonts/Messina-sans/MessinaSansWeb-Regular.woff") format(\'woff\'),\n      url("/fonts/Messina-sans/MessinaSansWeb-Regular.eot") format(\'embedded-opentype\');\n    font-style: normal;\n    font-weight: 400;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "Messina sans";\n    src: url("/fonts/Messina-sans/MessinaSansWeb-RegularItalic.woff2") format(\'woff2\'),\n      url("/fonts/Messina-sans/MessinaSansWeb-RegularItalic.woff") format(\'woff\'),\n      url("/fonts/Messina-sans/MessinaSansWeb-RegularItalic.eot") format(\'embedded-opentype\');\n    font-style: italic;\n    font-weight: 400;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "Messina sans";\n    src: url("/fonts/Messina-sans/MessinaSansWeb-Bold.woff2") format(\'woff2\'),\n      url("/fonts/Messina-sans/MessinaSansWeb-Bold.woff") format(\'woff\'),\n      url("/fonts/Messina-sans/MessinaSansWeb-Bold.eot") format(\'embedded-opentype\');\n    font-style: normal;\n    font-weight: 700;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: "Messina sans";\n    src: url("/fonts/Messina-sans/MessinaSansWeb-BoldItalic.woff2") format(\'woff2\'),\n      url("/fonts/Messina-sans/MessinaSansWeb-BoldItalic.woff") format(\'woff\'),\n      url("/fonts/Messina-sans/MessinaSansWeb-BoldItalic.eot") format(\'embedded-opentype\');\n    font-style: italic;\n    font-weight: 700;\n    font-display: swap;\n  }\n',
            ])),
          normalizeStyles,
          colors.zN,
          colors.TA,
          colors.P5,
          colors.CZ,
          colors.e$,
          colors.iv,
          colors.$S,
          colors.sT,
          colors.c,
          colors.SI,
          colors.Mj
        );
    },
    './src/stories/Forms/Button/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        z: function () {
          return Button;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        _Foundation_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/stories/Foundation/Spinner/index.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        ButtonElement = styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              [
                '\n  display: inline-flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  height: 38px;\n  padding: 0 var(--spacing-24);\n  border: solid 2px ',
                ';\n  border-radius: 30px;\n  color: ',
                ';\n  font-weight: bold;\n  font-family: var(--font-family);\n  background: ',
                ';\n  cursor: pointer;\n\n  ',
                '\n',
              ]
            )),
          function (p) {
            return 'var(--color-'.concat(p.color, ')');
          },
          function (p) {
            return p.secondary ? 'var(--color-'.concat(p.color, ')') : 'var(--color-white)';
          },
          function (p) {
            return p.secondary ? 'var(--color-white)' : 'var(--color-'.concat(p.color, ')');
          },
          function (p) {
            return p.disabled && 'opacity: 0.6; \n    cursor: not-allowed;\n    ';
          }
        ),
        ButtonLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              ['\n  opacity: ', ';\n']
            )),
          function (p) {
            return p.hide ? '0' : '1';
          }
        ),
        ButtonSpinner = (0, styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(
          _Foundation_Spinner__WEBPACK_IMPORTED_MODULE_1__.$
        )(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              ['\n  position: absolute;\n']
            ))
        ),
        Button = function Button(_ref) {
          var children = _ref.children,
            className = _ref.className,
            _ref$color = _ref.color,
            color = void 0 === _ref$color ? 'black' : _ref$color,
            disabled = _ref.disabled,
            loading = _ref.loading,
            onClick = _ref.onClick,
            secondary = _ref.secondary,
            _ref$type = _ref.type,
            type = void 0 === _ref$type ? 'button' : _ref$type;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ButtonElement, {
            'aria-busy': loading,
            className: className,
            color: color,
            disabled: disabled || loading,
            onClick: onClick,
            secondary: secondary,
            type: type,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonLabel, {
                hide: loading,
                children: children,
              }),
              loading &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonSpinner, {
                  color: secondary ? 'black' : 'white',
                  size: 24,
                }),
            ],
          });
        };
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: 'Button component',
            displayName: 'Button',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: 'black' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'enum', value: [{ value: '"black"' }, { value: '"lavender"' }] },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              loading: {
                defaultValue: null,
                description: '',
                name: 'loading',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '() => void' },
              },
              secondary: {
                defaultValue: null,
                description: '',
                name: 'secondary',
                required: !1,
                type: { name: 'boolean' },
              },
              type: {
                defaultValue: { value: 'button' },
                description: '',
                name: 'type',
                required: !1,
                type: { name: 'enum', value: [{ value: '"button"' }, { value: '"submit"' }, { value: '"reset"' }] },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Forms/Button/index.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'src/stories/Forms/Button/index.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Forms/Checkbox/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        X: function () {
          return Checkbox;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/react/index.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = [
          'ariaDescribedBy',
          'ariaErrorMessage',
          'children',
          'className',
          'hasError',
          'id',
          'isRequired',
          'name',
          'value',
        ],
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                "\n  label {\n    display: flex;\n    font-size: var(--font-size-14);\n    cursor: pointer;\n\n    // Checkbox\n    &:before {\n      display: block;\n      box-sizing: border-box;\n      flex-shrink: 0;\n      width: var(--spacing-16);\n      height: var(--spacing-16);\n      margin-right: var(--spacing-8);\n      border-radius: 2px;\n      content: '';\n\n      border: ",
                ";\n    }\n\n    a {\n      color: var(--color-lavender);\n    }\n  }\n\n  input[type='checkbox'] {\n    opacity: 0;\n    position: absolute;\n    left: -99999px; // This is to hide the checkbox without affecting screen readers\n\n    // Focus ring\n    &:focus + label:before {\n      outline: 1px dotted #212121; // Fallback to non-webkit browsers\n      outline: 5px auto -webkit-focus-ring-color;\n      outline-offset: 3px;\n    }\n\n    // Checked checkbox style\n    &:checked + label:before {\n      border-color: var(--color-lavender);\n      background-color: var(--color-lavender);\n      background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg enable-background='new 0 0 533.973 533.973' version='1.1' viewBox='0 0 533.97 533.97' xml:space='preserve' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='m477.93 52.261c-12.821-12.821-33.605-12.821-46.427 0l-266.96 266.95-62.075-62.069c-12.821-12.821-33.604-12.821-46.426 0l-46.427 46.426c-12.821 12.821-12.821 33.604 0 46.426l131.72 131.72c12.821 12.821 33.611 12.821 46.426 0l336.6-336.6c12.821-12.821 12.821-33.605 0-46.426l-46.425-46.426z'/%3E%3C/svg%3E%0A\");\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover;\n    }\n  }\n",
              ]
            )),
          function (_ref) {
            return _ref.hasError ? 'var(--border-error)' : 'var(--border-primary)';
          }
        ),
        Checkbox = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
          var ariaDescribedBy = props.ariaDescribedBy,
            ariaErrorMessage = props.ariaErrorMessage,
            children = props.children,
            className = props.className,
            hasError = props.hasError,
            id = props.id,
            isRequired = props.isRequired,
            name = props.name,
            value = props.value,
            additionalInputProps = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              props,
              _excluded
            );
          return (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Wrapper, { className: className, hasError: hasError, children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('input', (0, _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({ 'aria-labelledby': ariaDescribedBy, 'aria-errormessage': ariaErrorMessage, 'aria-invalid': hasError, checked: value, id: id, name: name || id, ref: ref, required: isRequired, type: 'checkbox' }, additionalInputProps)), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('label', { htmlFor: id, children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', { children: children }) })] });
        });
      try {
        (Checkbox.displayName = 'Checkbox'),
          (Checkbox.__docgenInfo = { description: 'Checkbox component', displayName: 'Checkbox', props: {} }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Forms/Checkbox/index.tsx#Checkbox'] = {
              docgenInfo: Checkbox.__docgenInfo,
              name: 'Checkbox',
              path: 'src/stories/Forms/Checkbox/index.tsx#Checkbox',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Forms/Fieldset/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        p: function () {
          return Fieldset;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.fieldset(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                '\n  display: block;\n  min-width: 0;\n  max-width: 400px;\n  margin: 0 0 var(--spacing-32) 0;\n  padding: 0.01em 0 0 0;\n  border: 0;\n\n  legend {\n    display: table;\n    margin-bottom: var(--spacing-16);\n    padding: 0;\n    font-weight: bold;\n    font-size: var(--font-size-20);\n  }\n',
              ]
            ))
        ),
        Fieldset = function Fieldset(_ref) {
          var children = _ref.children,
            className = _ref.className,
            legend = _ref.legend;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Wrapper, {
            className: className,
            children: [
              legend && (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('legend', { children: legend }),
              children,
            ],
          });
        };
      try {
        (Fieldset.displayName = 'Fieldset'),
          (Fieldset.__docgenInfo = {
            description: 'Fieldset component',
            displayName: 'Fieldset',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              legend: { defaultValue: null, description: '', name: 'legend', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Forms/Fieldset/index.tsx#Fieldset'] = {
              docgenInfo: Fieldset.__docgenInfo,
              name: 'Fieldset',
              path: 'src/stories/Forms/Fieldset/index.tsx#Fieldset',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Forms/Input/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        I: function () {
          return Input;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/react/index.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = [
          'ariaDescribedBy',
          'ariaErrorMessage',
          'className',
          'hasError',
          'id',
          'isRequired',
          'name',
          'type',
          'value',
        ],
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                '\n  display: ',
                ';\n\n  input {\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    height: var(--spacing-48);\n    padding: var(--spacing-16);\n    border: ',
                ';\n    border-radius: var(--border-radius);\n    font-size: var(--font-size-16);\n  }\n',
              ]
            )),
          function (p) {
            return p.isHidden ? 'none' : 'block';
          },
          function (p) {
            return p.hasError ? 'var(--border-error)' : 'var(--border-primary)';
          }
        ),
        Input = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
          var ariaDescribedBy = props.ariaDescribedBy,
            ariaErrorMessage = props.ariaErrorMessage,
            className = props.className,
            hasError = props.hasError,
            id = props.id,
            isRequired = props.isRequired,
            name = props.name,
            _props$type = props.type,
            type = void 0 === _props$type ? 'text' : _props$type,
            value = props.value,
            additionalInputProps = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              props,
              _excluded
            );
          return (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Wrapper, { 'aria-hidden': 'hidden' === type, className: className, hasError: hasError, isHidden: 'hidden' === type, children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('input', (0, _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({ 'aria-labelledby': ariaDescribedBy, 'aria-errormessage': ariaErrorMessage, 'aria-invalid': hasError, id: id, name: name || id, ref: ref, required: isRequired, type: type, value: value }, additionalInputProps)) });
        });
      try {
        (Input.displayName = 'Input'),
          (Input.__docgenInfo = { description: 'Input component', displayName: 'Input', props: {} }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Forms/Input/index.tsx#Input'] = {
              docgenInfo: Input.__docgenInfo,
              name: 'Input',
              path: 'src/stories/Forms/Input/index.tsx#Input',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Forms/InputWrapper/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        S: function () {
          return InputWrapper;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/react/index.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              [
                '\n  display: block;\n  width: 100%;\n  max-width: 400px;\n  margin-bottom: var(--spacing-32);\n\n  // Apply special styling when boxyErrorStyle is true and the input has an error.\n  ',
                '\n',
              ]
            )),
          function (_ref) {
            var boxyErrorStyle = _ref.boxyErrorStyle,
              hasError = _ref.hasError;
            return (
              boxyErrorStyle &&
              hasError &&
              "box-sizing: content-box;\n    margin: calc(var(--spacing-8) * -1); // Negative margin to account for the padding, this is so the rest of the elements don't move\n    padding: var(--spacing-8);\n    border-radius: var(--border-radius);\n    background-color: var(--color-alertRedBg);"
            );
          }
        ),
        HintWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              [
                '\n  position: relative;\n\n  & > * {\n    position: absolute;\n    margin-top: var(--spacing-4);\n\n    ',
                '\n\n    ',
                '\n  }\n',
              ]
            )),
          function (_ref2) {
            return (
              _ref2.boxyErrorStyle &&
              'position: static; // The hint/error should take up space in the box when boxyErrorStyle is true\n      margin-left: var(--spacing-24); // Align with checkbox/radio label\n    '
            );
          },
          function (_ref3) {
            var boxyErrorStyle = _ref3.boxyErrorStyle,
              hasError = _ref3.hasError;
            return boxyErrorStyle && hasError && 'color: var(--color-warningRed);';
          }
        ),
        HintText = styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              ['\n  color: var(--color-grayText);\n  font-size: var(--font-size-12);\n']
            ))
        ),
        InputWrapper = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
          var id = props.id,
            alert = props.alert,
            children = props.children,
            className = props.className,
            hint = props.hint,
            isRequired = props.isRequired,
            ariaDescribedById = hint ? ''.concat(id, '-hint') : void 0,
            ariaErrorMessageId = alert ? ''.concat(id, '-error') : void 0,
            globalInputProps = {
              ariaDescribedBy: ariaDescribedById,
              ariaErrorMessage: ariaErrorMessageId,
              hasError: !!alert || void 0,
              id: id,
              isRequired: isRequired,
            },
            childrenWithGlobalInputProps = react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (child) {
              return child.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment
                ? react__WEBPACK_IMPORTED_MODULE_0__.Children.map(child.props.children, function (child) {
                    return 'string' == typeof (null == child ? void 0 : child.type)
                      ? child
                      : react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, globalInputProps);
                  })
                : 'string' == typeof (null == child ? void 0 : child.type)
                ? child
                : react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, globalInputProps);
            }),
            hasBoxyErrorStyle =
              null == childrenWithGlobalInputProps
                ? void 0
                : childrenWithGlobalInputProps.some(function (child) {
                    return [_index__WEBPACK_IMPORTED_MODULE_1__.XZ, _index__WEBPACK_IMPORTED_MODULE_1__.Y8].includes(
                      null == child ? void 0 : child.type
                    );
                  }),
            HintWrapperProps = { boxyErrorStyle: hasBoxyErrorStyle, hasError: !!alert };
          return (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Wrapper, (0, _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0, _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({ className: className }, HintWrapperProps), {}, { ref: ref, children: [childrenWithGlobalInputProps, hint && !alert && (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HintWrapper, (0, _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0, _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({}, HintWrapperProps), {}, { children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HintText, { id: ariaErrorMessageId, className: 'hint-text', children: hint }) })), alert && (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HintWrapper, (0, _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0, _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({}, HintWrapperProps), {}, { children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.QP, { id: ariaErrorMessageId, className: 'alert-text', severity: 'error', hideIcon: hasBoxyErrorStyle, children: alert }) }))] }));
        });
      try {
        (InputWrapper.displayName = 'InputWrapper'),
          (InputWrapper.__docgenInfo = {
            description: 'InputWrapper component',
            displayName: 'InputWrapper',
            props: {
              id: { defaultValue: null, description: '', name: 'id', required: !0, type: { name: 'string' } },
              alert: { defaultValue: null, description: '', name: 'alert', required: !1, type: { name: 'string' } },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              hint: { defaultValue: null, description: '', name: 'hint', required: !1, type: { name: 'string' } },
              isRequired: {
                defaultValue: null,
                description: '',
                name: 'isRequired',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Forms/InputWrapper/index.tsx#InputWrapper'] = {
              docgenInfo: InputWrapper.__docgenInfo,
              name: 'InputWrapper',
              path: 'src/stories/Forms/InputWrapper/index.tsx#InputWrapper',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Forms/Label/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        _: function () {
          return Label;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                '\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  column-gap: var(--spacing-16);\n\n  label {\n    display: block;\n    margin-bottom: var(--spacing-8);\n    font-weight: bold;\n    font-size: var(--font-size-14);\n    line-height: 1;\n\n    .required-text {\n      font-weight: normal;\n      font-size: var(--font-size-12);\n    }\n\n    a {\n      color: var(--color-lavender);\n    }\n  }\n\n  .help-link {\n    margin-bottom: var(--spacing-8);\n    color: var(--color-lavender);\n    font-size: var(--font-size-12);\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n',
              ]
            ))
        ),
        Label = function Label(_ref) {
          var children = _ref.children,
            className = _ref.className,
            helpLabel = _ref.helpLabel,
            helpLink = _ref.helpLink,
            htmlFor = _ref.htmlFor,
            id = _ref.id,
            isRequired = _ref.isRequired;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Wrapper, {
            className: className,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('label', {
                htmlFor: htmlFor || id,
                children: [
                  children,
                  ' ',
                  !isRequired &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', {
                      className: 'required-text',
                      children: '(optional)',
                    }),
                ],
              }),
              helpLink &&
                helpLabel &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('a', {
                  href: helpLink,
                  className: 'help-link',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: helpLabel,
                }),
            ],
          });
        };
      try {
        (Label.displayName = 'Label'),
          (Label.__docgenInfo = {
            description: 'Label component',
            displayName: 'Label',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              helpLabel: {
                defaultValue: null,
                description: '',
                name: 'helpLabel',
                required: !1,
                type: { name: 'string' },
              },
              helpLink: {
                defaultValue: null,
                description: '',
                name: 'helpLink',
                required: !1,
                type: { name: 'string' },
              },
              htmlFor: { defaultValue: null, description: '', name: 'htmlFor', required: !1, type: { name: 'string' } },
              id: { defaultValue: null, description: '', name: 'id', required: !1, type: { name: 'string' } },
              isRequired: {
                defaultValue: null,
                description: '',
                name: 'isRequired',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Forms/Label/index.tsx#Label'] = {
              docgenInfo: Label.__docgenInfo,
              name: 'Label',
              path: 'src/stories/Forms/Label/index.tsx#Label',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Forms/Radio/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Y: function () {
          return Radio;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/react/index.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = [
          'ariaDescribedBy',
          'ariaErrorMessage',
          'children',
          'className',
          'hasError',
          'id',
          'isRequired',
          'name',
          'value',
        ],
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                "\n  label {\n    display: flex;\n    font-size: var(--font-size-14);\n    cursor: pointer;\n\n    // Radio\n    &:before {\n      display: block;\n      box-sizing: border-box;\n      flex-shrink: 0;\n      width: var(--spacing-16);\n      height: var(--spacing-16);\n      margin-right: var(--spacing-8);\n      border-radius: var(--spacing-16);\n      content: '';\n\n      border: ",
                ";\n    }\n\n    a {\n      color: var(--color-lavender);\n    }\n  }\n\n  input[type='radio'] {\n    opacity: 0;\n    position: absolute;\n    left: -99999px; // This is to hide the radio without affecting screen readers\n\n    // Focus ring\n    &:focus + label:before {\n      outline: 1px dotted #212121; // Fallback to non-webkit browsers\n      outline: 5px auto -webkit-focus-ring-color;\n      outline-offset: 3px;\n    }\n\n    // Checked radio style\n    &:checked + label:before {\n      border-color: var(--color-lavender);\n      background-color: var(--color-lavender);\n      background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 2'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23fff'/%3E%3C/svg%3E\");\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: var(--spacing-8);\n    }\n  }\n",
              ]
            )),
          function (_ref) {
            return _ref.hasError ? 'var(--border-error)' : 'var(--border-primary)';
          }
        ),
        Radio = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
          var ariaDescribedBy = props.ariaDescribedBy,
            ariaErrorMessage = props.ariaErrorMessage,
            children = props.children,
            className = props.className,
            hasError = props.hasError,
            id = props.id,
            isRequired = props.isRequired,
            name = props.name,
            value = props.value,
            additionalInputProps = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              props,
              _excluded
            );
          return (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Wrapper, { className: className, hasError: hasError, children: [(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('input', (0, _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({ 'aria-labelledby': ariaDescribedBy, 'aria-errormessage': ariaErrorMessage, 'aria-invalid': hasError, checked: value, id: id, name: name || id, ref: ref, required: isRequired, type: 'radio' }, additionalInputProps)), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('label', { htmlFor: id, children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('span', { children: children }) })] });
        });
      try {
        (Radio.displayName = 'Radio'),
          (Radio.__docgenInfo = { description: 'Radio component', displayName: 'Radio', props: {} }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Forms/Radio/index.tsx#Radio'] = {
              docgenInfo: Radio.__docgenInfo,
              name: 'Radio',
              path: 'src/stories/Forms/Radio/index.tsx#Radio',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Forms/Select/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        P: function () {
          return Select;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/react/index.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = [
          'ariaDescribedBy',
          'ariaErrorMessage',
          'children',
          'className',
          'hasError',
          'id',
          'isRequired',
          'name',
          'value',
        ],
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                '\n  select {\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    height: var(--spacing-48);\n    padding: 0 var(--spacing-16);\n    border: ',
                ";\n    border-radius: var(--border-radius);\n    font-size: var(--font-size-16);\n    font-family: var(--font-family-primary);\n    cursor: pointer;\n    // This is to get a custom arrow on the select element\n    background: url(\"data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6.5 7L12 1' stroke='black'/%3E%3C/svg%3E%0A\");\n    background-repeat: no-repeat;\n    background-position: right var(--spacing-16) center;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n  }\n",
              ]
            )),
          function (p) {
            return p.hasError ? 'var(--border-error)' : 'var(--border-primary)';
          }
        ),
        Select = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
          var ariaDescribedBy = props.ariaDescribedBy,
            ariaErrorMessage = props.ariaErrorMessage,
            children = props.children,
            className = props.className,
            hasError = props.hasError,
            id = props.id,
            isRequired = props.isRequired,
            name = props.name,
            value = props.value,
            additionalInputProps = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              props,
              _excluded
            );
          return (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Wrapper, { className: className, hasError: hasError, children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('select', (0, _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0, _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({ 'aria-labelledby': ariaDescribedBy, 'aria-errormessage': ariaErrorMessage, 'aria-invalid': hasError, id: id, name: name || id, ref: ref, required: isRequired, value: value }, additionalInputProps), {}, { children: children })) });
        });
      try {
        (Select.displayName = 'Select'),
          (Select.__docgenInfo = { description: 'Select component', displayName: 'Select', props: {} }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Forms/Select/index.tsx#Select'] = {
              docgenInfo: Select.__docgenInfo,
              name: 'Select',
              path: 'src/stories/Forms/Select/index.tsx#Select',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Forms/TextArea/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        K: function () {
          return TextArea;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/react/index.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = [
          'ariaDescribedBy',
          'ariaErrorMessage',
          'className',
          'hasError',
          'id',
          'isRequired',
          'name',
          'value',
        ],
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                '\n  textarea {\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    height: 120px;\n    padding: var(--spacing-16);\n    border: ',
                ';\n    border-radius: var(--border-radius);\n    font-family: var(--font-family-primary);\n    resize: vertical;\n  }\n',
              ]
            )),
          function (p) {
            return p.hasError ? 'var(--border-error)' : 'var(--border-primary)';
          }
        ),
        TextArea = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
          var ariaDescribedBy = props.ariaDescribedBy,
            ariaErrorMessage = props.ariaErrorMessage,
            className = props.className,
            hasError = props.hasError,
            id = props.id,
            isRequired = props.isRequired,
            name = props.name,
            value = props.value,
            additionalInputProps = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              props,
              _excluded
            );
          return (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Wrapper, { className: className, hasError: hasError, children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('textarea', (0, _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({ 'aria-labelledby': ariaDescribedBy, 'aria-errormessage': ariaErrorMessage, 'aria-invalid': hasError, id: id, name: name || id, ref: ref, required: isRequired, value: value }, additionalInputProps)) });
        });
      try {
        (TextArea.displayName = 'TextArea'),
          (TextArea.__docgenInfo = { description: 'TextArea component', displayName: 'TextArea', props: {} }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Forms/TextArea/index.tsx#TextArea'] = {
              docgenInfo: TextArea.__docgenInfo,
              name: 'TextArea',
              path: 'src/stories/Forms/TextArea/index.tsx#TextArea',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/AlertText/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Q: function () {
          return AlertText;
        },
      });
      var _templateObject,
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        styled_components_browser_esm =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Success = function SuccessIcon() {
          return (0, jsx_runtime.jsxs)('svg', {
            width: '17',
            height: '17',
            viewBox: '0 0 17 17',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, jsx_runtime.jsx)('circle', { cx: '8.5', cy: '8.5', r: '8.5', fill: '#007E33' }),
              (0, jsx_runtime.jsx)('path', {
                d: 'M7.6001 11.152V13H9.4001V11.152H7.6001ZM9.3521 7.216V4H7.6481V7.216L7.9361 10.336H9.0641L9.3521 7.216Z',
                fill: 'white',
              }),
            ],
          });
        },
        Info = function InfoIcon() {
          return (0, jsx_runtime.jsxs)('svg', {
            width: '17',
            height: '17',
            viewBox: '0 0 17 17',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, jsx_runtime.jsx)('circle', { cx: '8.5', cy: '8.5', r: '8.5', fill: '#0099CC' }),
              (0, jsx_runtime.jsx)('path', {
                d: 'M7.6001 11.152V13H9.4001V11.152H7.6001ZM9.3521 7.216V4H7.6481V7.216L7.9361 10.336H9.0641L9.3521 7.216Z',
                fill: 'white',
              }),
            ],
          });
        },
        Warning = function WarningIcon() {
          return (0, jsx_runtime.jsxs)('svg', {
            width: '17',
            height: '17',
            viewBox: '0 0 17 17',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, jsx_runtime.jsx)('circle', { cx: '8.5', cy: '8.5', r: '8.5', fill: '#FF8800' }),
              (0, jsx_runtime.jsx)('path', {
                d: 'M7.6001 11.152V13H9.4001V11.152H7.6001ZM9.3521 7.216V4H7.6481V7.216L7.9361 10.336H9.0641L9.3521 7.216Z',
                fill: 'white',
              }),
            ],
          });
        },
        Failed = function FailedIcon() {
          return (0, jsx_runtime.jsxs)('svg', {
            width: '17',
            height: '17',
            viewBox: '0 0 17 17',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, jsx_runtime.jsx)('circle', { cx: '8.5', cy: '8.5', r: '8.5', fill: '#B1060F' }),
              (0, jsx_runtime.jsx)('path', {
                d: 'M7.6001 11.152V13H9.4001V11.152H7.6001ZM9.3521 7.216V4H7.6481V7.216L7.9361 10.336H9.0641L9.3521 7.216Z',
                fill: 'white',
              }),
            ],
          });
        },
        Wrapper = styled_components_browser_esm.ZP.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  display: flex;\n  align-items: center;\n  width: 100%;\n  column-gap: var(--spacing-8);\n  font-size: var(--font-size-12);\n\n  i {\n    display: inline-flex;\n    svg {\n      width: var(--spacing-16);\n      height: var(--spacing-16);\n    }\n  }\n',
            ]))
        ),
        getIcon = function getIcon(severity) {
          switch (severity) {
            case 'success':
              return (0, jsx_runtime.jsx)(Success, {});
            case 'info':
              return (0, jsx_runtime.jsx)(Info, {});
            case 'warning':
              return (0, jsx_runtime.jsx)(Warning, {});
            case 'error':
              return (0, jsx_runtime.jsx)(Failed, {});
          }
        },
        AlertText = function AlertText(_ref) {
          var children = _ref.children,
            className = _ref.className,
            hideIcon = _ref.hideIcon,
            id = _ref.id,
            _ref$severity = _ref.severity,
            severity = void 0 === _ref$severity ? 'info' : _ref$severity;
          return (0, jsx_runtime.jsxs)(Wrapper, {
            className: className,
            id: id,
            role: 'alert',
            children: [
              !hideIcon && (0, jsx_runtime.jsx)('i', { 'aria-hidden': 'true', children: getIcon(severity) }),
              (0, jsx_runtime.jsx)('span', { children: children }),
            ],
          });
        };
      try {
        (AlertText.displayName = 'AlertText'),
          (AlertText.__docgenInfo = {
            description: 'AlertText component',
            displayName: 'AlertText',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              hideIcon: {
                defaultValue: null,
                description: '',
                name: 'hideIcon',
                required: !1,
                type: { name: 'boolean' },
              },
              id: { defaultValue: null, description: '', name: 'id', required: !1, type: { name: 'string' } },
              severity: {
                defaultValue: { value: 'info' },
                description: '',
                name: 'severity',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"success"' }, { value: '"info"' }, { value: '"warning"' }, { value: '"error"' }],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/AlertText/index.tsx#AlertText'] = {
              docgenInfo: AlertText.__docgenInfo,
              name: 'AlertText',
              path: 'src/stories/Foundation/AlertText/index.tsx#AlertText',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/Badge/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        C: function () {
          return Badge;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                '\n  background-color: var(--color-lavender);\n  color: var(--color-white);\n  font-family: var(--font-family);\n  font-size: 14px;\n  padding: 2px 5px;\n  height: 100%;\n',
              ]
            ))
        ),
        Badge = function Badge(_ref) {
          var children = _ref.children;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Wrapper, { children: children });
        };
      try {
        (Badge.displayName = 'Badge'),
          (Badge.__docgenInfo = { description: 'Badge component', displayName: 'Badge', props: {} }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Badge/index.tsx#Badge'] = {
              docgenInfo: Badge.__docgenInfo,
              name: 'Badge',
              path: 'src/stories/Foundation/Badge/index.tsx#Badge',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/Card/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Z: function () {
          return Card;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              ['\n  border-radius: 8px;\n  background-color: ', ';\n  padding: var(--spacing-16);\n']
            )),
          function (p) {
            return 'var(--color-'.concat(p.background, ')');
          }
        ),
        Card = function Card(_ref) {
          var _ref$background = _ref.background,
            background = void 0 === _ref$background ? 'white' : _ref$background,
            children = _ref.children,
            className = _ref.className;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Wrapper, {
            background: background,
            className: className,
            children: children,
          });
        };
      try {
        (Card.displayName = 'Card'),
          (Card.__docgenInfo = {
            description: 'Card component',
            displayName: 'Card',
            props: {
              background: {
                defaultValue: { value: 'white' },
                description: '',
                name: 'background',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"black"' },
                    { value: '"lavender"' },
                    { value: '"whisperBlue"' },
                    { value: '"plumbagoBlue"' },
                    { value: '"salviaBlue"' },
                    { value: '"royalBlue"' },
                    { value: '"marineBlue"' },
                    { value: '"whisperYellow"' },
                    { value: '"cheesecakeYellow"' },
                    { value: '"sunYellow"' },
                    { value: '"dijonYellow"' },
                    { value: '"curryYellow"' },
                    { value: '"autumnYellow"' },
                    { value: '"whisperCoral"' },
                    { value: '"cantaloupeOrange"' },
                    { value: '"papayaOrange"' },
                    { value: '"fireOrange"' },
                    { value: '"burntOrange"' },
                    { value: '"rustRed"' },
                    { value: '"whisperTaupe"' },
                    { value: '"macaronTaupe"' },
                    { value: '"eveningTaupe"' },
                    { value: '"clayTaupe"' },
                    { value: '"chestnutTaupe"' },
                    { value: '"rosewoodTaupe"' },
                    { value: '"whisperPink"' },
                    { value: '"candyflossPink"' },
                    { value: '"petitePink"' },
                    { value: '"balloonPink"' },
                    { value: '"passionPink"' },
                    { value: '"burntPink"' },
                    { value: '"whisperOrange"' },
                    { value: '"apricotOrange"' },
                    { value: '"caramelBrown"' },
                    { value: '"cinnamonBrown"' },
                    { value: '"leatherBrown"' },
                    { value: '"chocolateBrown"' },
                    { value: '"whisperGreen"' },
                    { value: '"greenTea"' },
                    { value: '"springGreen"' },
                    { value: '"oliveGreen"' },
                    { value: '"mossGreen"' },
                    { value: '"oreganoGreen"' },
                    { value: '"coralOrange"' },
                    { value: '"signalOrange"' },
                    { value: '"intenseOrange"' },
                    { value: '"hotOrange"' },
                    { value: '"redWine"' },
                    { value: '"grey98"' },
                    { value: '"grey96"' },
                    { value: '"grey91"' },
                    { value: '"grey86"' },
                    { value: '"grey76"' },
                    { value: '"grey62"' },
                    { value: '"grey45"' },
                    { value: '"grey35"' },
                    { value: '"grey25"' },
                    { value: '"grey15"' },
                    { value: '"grey10"' },
                    { value: '"white"' },
                  ],
                },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Card/index.tsx#Card'] = {
              docgenInfo: Card.__docgenInfo,
              name: 'Card',
              path: 'src/stories/Foundation/Card/index.tsx#Card',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/ColorBox/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        k: function () {
          return ColorBox;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        ColoredBox = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              ['\n  background-color: ', ';\n']
            )),
          function (p) {
            return 'var(--color-'.concat(p.color, ')');
          }
        ),
        ColorBox = function ColorBox(_ref) {
          var color = _ref.color,
            children = _ref.children,
            className = _ref.className;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColoredBox, {
            color: color,
            className: className,
            children: children,
          });
        };
      try {
        (ColorBox.displayName = 'ColorBox'),
          (ColorBox.__docgenInfo = {
            description: 'Grid component',
            displayName: 'ColorBox',
            props: {
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !0,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"black"' },
                    { value: '"lavender"' },
                    { value: '"whisperBlue"' },
                    { value: '"plumbagoBlue"' },
                    { value: '"salviaBlue"' },
                    { value: '"royalBlue"' },
                    { value: '"marineBlue"' },
                    { value: '"whisperYellow"' },
                    { value: '"cheesecakeYellow"' },
                    { value: '"sunYellow"' },
                    { value: '"dijonYellow"' },
                    { value: '"curryYellow"' },
                    { value: '"autumnYellow"' },
                    { value: '"whisperCoral"' },
                    { value: '"cantaloupeOrange"' },
                    { value: '"papayaOrange"' },
                    { value: '"fireOrange"' },
                    { value: '"burntOrange"' },
                    { value: '"rustRed"' },
                    { value: '"whisperTaupe"' },
                    { value: '"macaronTaupe"' },
                    { value: '"eveningTaupe"' },
                    { value: '"clayTaupe"' },
                    { value: '"chestnutTaupe"' },
                    { value: '"rosewoodTaupe"' },
                    { value: '"whisperPink"' },
                    { value: '"candyflossPink"' },
                    { value: '"petitePink"' },
                    { value: '"balloonPink"' },
                    { value: '"passionPink"' },
                    { value: '"burntPink"' },
                    { value: '"whisperOrange"' },
                    { value: '"apricotOrange"' },
                    { value: '"caramelBrown"' },
                    { value: '"cinnamonBrown"' },
                    { value: '"leatherBrown"' },
                    { value: '"chocolateBrown"' },
                    { value: '"whisperGreen"' },
                    { value: '"greenTea"' },
                    { value: '"springGreen"' },
                    { value: '"oliveGreen"' },
                    { value: '"mossGreen"' },
                    { value: '"oreganoGreen"' },
                    { value: '"coralOrange"' },
                    { value: '"signalOrange"' },
                    { value: '"intenseOrange"' },
                    { value: '"hotOrange"' },
                    { value: '"redWine"' },
                    { value: '"grey98"' },
                    { value: '"grey96"' },
                    { value: '"grey91"' },
                    { value: '"grey86"' },
                    { value: '"grey76"' },
                    { value: '"grey62"' },
                    { value: '"grey45"' },
                    { value: '"grey35"' },
                    { value: '"grey25"' },
                    { value: '"grey15"' },
                    { value: '"grey10"' },
                    { value: '"white"' },
                  ],
                },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/ColorBox/index.tsx#ColorBox'] = {
              docgenInfo: ColorBox.__docgenInfo,
              name: 'ColorBox',
              path: 'src/stories/Foundation/ColorBox/index.tsx#ColorBox',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/Flex/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        k: function () {
          return Flex;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                '\n  display: flex;\n  flex-direction: ',
                ';\n  flex-wrap: ',
                ';\n  align-items: ',
                ';\n  justify-content: ',
                ';\n  row-gap: ',
                ';\n  column-gap: ',
                ';\n',
              ]
            )),
          function (p) {
            return p.direction;
          },
          function (p) {
            return p.wrap;
          },
          function (p) {
            return p.align;
          },
          function (p) {
            return p.justify;
          },
          function (p) {
            return 'var(--spacing-'.concat(p.rowGap, ')');
          },
          function (p) {
            return 'var(--spacing-'.concat(p.columnGap, ')');
          }
        ),
        Flex = function Flex(_ref) {
          var _ref$direction = _ref.direction,
            direction = void 0 === _ref$direction ? 'row' : _ref$direction,
            _ref$wrap = _ref.wrap,
            wrap = void 0 === _ref$wrap ? 'nowrap' : _ref$wrap,
            _ref$justify = _ref.justify,
            justify = void 0 === _ref$justify ? 'flex-start' : _ref$justify,
            _ref$align = _ref.align,
            align = void 0 === _ref$align ? 'center' : _ref$align,
            rowGap = _ref.rowGap,
            columnGap = _ref.columnGap,
            children = _ref.children,
            className = _ref.className;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Wrapper, {
            direction: direction,
            wrap: wrap,
            justify: justify,
            align: align,
            rowGap: rowGap,
            columnGap: columnGap,
            className: className,
            children: children,
          });
        };
      try {
        (Flex.displayName = 'Flex'),
          (Flex.__docgenInfo = {
            description: 'Flex component',
            displayName: 'Flex',
            props: {
              direction: {
                defaultValue: { value: 'row' },
                description: '',
                name: 'direction',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"row"' },
                    { value: '"row-reverse"' },
                    { value: '"column"' },
                    { value: '"column-revers"' },
                  ],
                },
              },
              wrap: {
                defaultValue: { value: 'nowrap' },
                description: '',
                name: 'wrap',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"wrap"' }, { value: '"nowrap"' }, { value: '"wrap-reverse"' }],
                },
              },
              justify: {
                defaultValue: { value: 'flex-start' },
                description: '',
                name: 'justify',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"flex-start"' },
                    { value: '"flex-end"' },
                    { value: '"center"' },
                    { value: '"space-between"' },
                    { value: '"space-around"' },
                    { value: '"space-evenly"' },
                  ],
                },
              },
              align: {
                defaultValue: { value: 'center' },
                description: '',
                name: 'align',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"flex-start"' },
                    { value: '"flex-end"' },
                    { value: '"center"' },
                    { value: '"space-between"' },
                    { value: '"space-around"' },
                    { value: '"stretch"' },
                  ],
                },
              },
              rowGap: {
                defaultValue: null,
                description: '',
                name: 'rowGap',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '0' },
                    { value: '4' },
                    { value: '8' },
                    { value: '16' },
                    { value: '24' },
                    { value: '32' },
                    { value: '40' },
                    { value: '48' },
                    { value: '56' },
                    { value: '64' },
                  ],
                },
              },
              columnGap: {
                defaultValue: null,
                description: '',
                name: 'columnGap',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '0' },
                    { value: '4' },
                    { value: '8' },
                    { value: '16' },
                    { value: '24' },
                    { value: '32' },
                    { value: '40' },
                    { value: '48' },
                    { value: '56' },
                    { value: '64' },
                  ],
                },
              },
              background: {
                defaultValue: null,
                description: '',
                name: 'background',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"black"' },
                    { value: '"lavender"' },
                    { value: '"whisperBlue"' },
                    { value: '"plumbagoBlue"' },
                    { value: '"salviaBlue"' },
                    { value: '"royalBlue"' },
                    { value: '"marineBlue"' },
                    { value: '"whisperYellow"' },
                    { value: '"cheesecakeYellow"' },
                    { value: '"sunYellow"' },
                    { value: '"dijonYellow"' },
                    { value: '"curryYellow"' },
                    { value: '"autumnYellow"' },
                    { value: '"whisperCoral"' },
                    { value: '"cantaloupeOrange"' },
                    { value: '"papayaOrange"' },
                    { value: '"fireOrange"' },
                    { value: '"burntOrange"' },
                    { value: '"rustRed"' },
                    { value: '"whisperTaupe"' },
                    { value: '"macaronTaupe"' },
                    { value: '"eveningTaupe"' },
                    { value: '"clayTaupe"' },
                    { value: '"chestnutTaupe"' },
                    { value: '"rosewoodTaupe"' },
                    { value: '"whisperPink"' },
                    { value: '"candyflossPink"' },
                    { value: '"petitePink"' },
                    { value: '"balloonPink"' },
                    { value: '"passionPink"' },
                    { value: '"burntPink"' },
                    { value: '"whisperOrange"' },
                    { value: '"apricotOrange"' },
                    { value: '"caramelBrown"' },
                    { value: '"cinnamonBrown"' },
                    { value: '"leatherBrown"' },
                    { value: '"chocolateBrown"' },
                    { value: '"whisperGreen"' },
                    { value: '"greenTea"' },
                    { value: '"springGreen"' },
                    { value: '"oliveGreen"' },
                    { value: '"mossGreen"' },
                    { value: '"oreganoGreen"' },
                    { value: '"coralOrange"' },
                    { value: '"signalOrange"' },
                    { value: '"intenseOrange"' },
                    { value: '"hotOrange"' },
                    { value: '"redWine"' },
                    { value: '"grey98"' },
                    { value: '"grey96"' },
                    { value: '"grey91"' },
                    { value: '"grey86"' },
                    { value: '"grey76"' },
                    { value: '"grey62"' },
                    { value: '"grey45"' },
                    { value: '"grey35"' },
                    { value: '"grey25"' },
                    { value: '"grey15"' },
                    { value: '"grey10"' },
                    { value: '"white"' },
                  ],
                },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Flex/index.tsx#Flex'] = {
              docgenInfo: Flex.__docgenInfo,
              name: 'Flex',
              path: 'src/stories/Foundation/Flex/index.tsx#Flex',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/Grid/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        r: function () {
          return Grid;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                '\n  display: grid;\n  grid-template-columns: ',
                ';\n  grid-template-rows: ',
                ';\n  row-gap: ',
                ';\n  column-gap: ',
                ';\n  justify-items: ',
                ';\n  align-items: ',
                ';\n',
              ]
            )),
          function (p) {
            return p.columns;
          },
          function (p) {
            return p.rows;
          },
          function (p) {
            return 'var(--spacing-'.concat(p.rowGap, ')');
          },
          function (p) {
            return 'var(--spacing-'.concat(p.columnGap, ')');
          },
          function (p) {
            return p.justifyItems;
          },
          function (p) {
            return p.alignItems;
          }
        ),
        Grid = function Grid(_ref) {
          var _ref$rows = _ref.rows,
            rows = void 0 === _ref$rows ? 'none' : _ref$rows,
            _ref$columns = _ref.columns,
            columns = void 0 === _ref$columns ? 'none' : _ref$columns,
            _ref$rowGap = _ref.rowGap,
            rowGap = void 0 === _ref$rowGap ? 0 : _ref$rowGap,
            _ref$columnGap = _ref.columnGap,
            columnGap = void 0 === _ref$columnGap ? 0 : _ref$columnGap,
            _ref$justifyItems = _ref.justifyItems,
            justifyItems = void 0 === _ref$justifyItems ? 'normal' : _ref$justifyItems,
            _ref$alignItems = _ref.alignItems,
            alignItems = void 0 === _ref$alignItems ? 'normal' : _ref$alignItems,
            children = _ref.children,
            className = _ref.className;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Wrapper, {
            className: className,
            rows: rows,
            columns: columns,
            justifyItems: justifyItems,
            alignItems: alignItems,
            rowGap: rowGap,
            columnGap: columnGap,
            children: children,
          });
        };
      try {
        (Grid.displayName = 'Grid'),
          (Grid.__docgenInfo = {
            description: 'Grid component',
            displayName: 'Grid',
            props: {
              rows: {
                defaultValue: { value: 'none' },
                description: '',
                name: 'rows',
                required: !1,
                type: { name: 'string' },
              },
              columns: {
                defaultValue: { value: 'none' },
                description: '',
                name: 'columns',
                required: !1,
                type: { name: 'string' },
              },
              rowGap: {
                defaultValue: { value: '0' },
                description: '',
                name: 'rowGap',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '0' },
                    { value: '4' },
                    { value: '8' },
                    { value: '16' },
                    { value: '24' },
                    { value: '32' },
                    { value: '40' },
                    { value: '48' },
                    { value: '56' },
                    { value: '64' },
                  ],
                },
              },
              columnGap: {
                defaultValue: { value: '0' },
                description: '',
                name: 'columnGap',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '0' },
                    { value: '4' },
                    { value: '8' },
                    { value: '16' },
                    { value: '24' },
                    { value: '32' },
                    { value: '40' },
                    { value: '48' },
                    { value: '56' },
                    { value: '64' },
                  ],
                },
              },
              justifyItems: {
                defaultValue: { value: 'normal' },
                description: '',
                name: 'justifyItems',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"center"' },
                    { value: '"stretch"' },
                    { value: '"start"' },
                    { value: '"end"' },
                    { value: '"normal"' },
                  ],
                },
              },
              alignItems: {
                defaultValue: { value: 'normal' },
                description: '',
                name: 'alignItems',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"center"' },
                    { value: '"stretch"' },
                    { value: '"start"' },
                    { value: '"end"' },
                    { value: '"normal"' },
                  ],
                },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Grid/index.tsx#Grid'] = {
              docgenInfo: Grid.__docgenInfo,
              name: 'Grid',
              path: 'src/stories/Foundation/Grid/index.tsx#Grid',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/GridItem/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        P: function () {
          return GridItem;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                '\n  grid-column-start: ',
                ';\n  grid-column-end: ',
                ';\n  grid-row-start: ',
                ';\n  grid-row-end: ',
                ';\n  justify-self: ',
                ';\n  align-self: ',
                ';\n',
              ]
            )),
          function (p) {
            return p.columnStart;
          },
          function (p) {
            return p.columnEnd;
          },
          function (p) {
            return p.rowStart;
          },
          function (p) {
            return p.rowEnd;
          },
          function (p) {
            return p.justifySelf;
          },
          function (p) {
            return p.alignSelf;
          }
        ),
        GridItem = function GridItem(_ref) {
          var _ref$columnStart = _ref.columnStart,
            columnStart = void 0 === _ref$columnStart ? 'auto' : _ref$columnStart,
            _ref$columnEnd = _ref.columnEnd,
            columnEnd = void 0 === _ref$columnEnd ? 'auto' : _ref$columnEnd,
            _ref$rowStart = _ref.rowStart,
            rowStart = void 0 === _ref$rowStart ? 'auto' : _ref$rowStart,
            _ref$rowEnd = _ref.rowEnd,
            rowEnd = void 0 === _ref$rowEnd ? 'auto' : _ref$rowEnd,
            _ref$justifySelf = _ref.justifySelf,
            justifySelf = void 0 === _ref$justifySelf ? 'stretch' : _ref$justifySelf,
            _ref$alignSelf = _ref.alignSelf,
            alignSelf = void 0 === _ref$alignSelf ? 'stretch' : _ref$alignSelf,
            children = _ref.children,
            className = _ref.className;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Wrapper, {
            columnStart: columnStart,
            columnEnd: columnEnd,
            rowStart: rowStart,
            rowEnd: rowEnd,
            justifySelf: justifySelf,
            alignSelf: alignSelf,
            className: className,
            children: children,
          });
        };
      try {
        (GridItem.displayName = 'GridItem'),
          (GridItem.__docgenInfo = {
            description: 'GridItem component',
            displayName: 'GridItem',
            props: {
              columnStart: {
                defaultValue: { value: 'auto' },
                description: '',
                name: 'columnStart',
                required: !1,
                type: { name: 'string | number' },
              },
              columnEnd: {
                defaultValue: { value: 'auto' },
                description: '',
                name: 'columnEnd',
                required: !1,
                type: { name: 'string | number' },
              },
              rowStart: {
                defaultValue: { value: 'auto' },
                description: '',
                name: 'rowStart',
                required: !1,
                type: { name: 'string | number' },
              },
              rowEnd: {
                defaultValue: { value: 'auto' },
                description: '',
                name: 'rowEnd',
                required: !1,
                type: { name: 'string | number' },
              },
              justifySelf: {
                defaultValue: { value: 'stretch' },
                description: '',
                name: 'justifySelf',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"center"' }, { value: '"stretch"' }, { value: '"start"' }, { value: '"end"' }],
                },
              },
              alignSelf: {
                defaultValue: { value: 'stretch' },
                description: '',
                name: 'alignSelf',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '"center"' }, { value: '"stretch"' }, { value: '"start"' }, { value: '"end"' }],
                },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/GridItem/index.tsx#GridItem'] = {
              docgenInfo: GridItem.__docgenInfo,
              name: 'GridItem',
              path: 'src/stories/Foundation/GridItem/index.tsx#GridItem',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/Icon/components/index.ts': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Add: function () {
            return Add;
          },
          ArrowDown: function () {
            return ArrowDown;
          },
          ArrowLeft: function () {
            return ArrowLeft;
          },
          ArrowRight: function () {
            return ArrowRight;
          },
          ArrowUp: function () {
            return ArrowUp;
          },
          Check: function () {
            return Check;
          },
          ChevronDown: function () {
            return ChevronDown;
          },
          ChevronLeft: function () {
            return ChevronLeft;
          },
          ChevronRight: function () {
            return ChevronRight;
          },
          ChevronUp: function () {
            return ChevronUp;
          },
          Cross: function () {
            return Cross;
          },
          DesktopFraming: function () {
            return DesktopFraming;
          },
          Edit: function () {
            return Edit;
          },
          Ethernet: function () {
            return Ethernet;
          },
          Filter: function () {
            return Filter;
          },
          ImageQuality: function () {
            return ImageQuality;
          },
          Menu: function () {
            return Menu;
          },
          Minus: function () {
            return Minus;
          },
          Plus: function () {
            return Plus;
          },
          PortraitLighting: function () {
            return PortraitLighting;
          },
          Profile: function () {
            return Profile;
          },
          Refresh: function () {
            return Refresh;
          },
          Remove: function () {
            return Remove;
          },
          Settings: function () {
            return Settings;
          },
          SpeakerFraming: function () {
            return SpeakerFraming;
          },
          Update: function () {
            return Update;
          },
          Usb: function () {
            return Usb;
          },
          User: function () {
            return User;
          },
          Users: function () {
            return Users;
          },
          WideAngle: function () {
            return WideAngle;
          },
        });
      __webpack_require__('./node_modules/react/index.js');
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Add = function Add(_ref) {
          var className = _ref.className,
            _ref$color = _ref.color,
            color = void 0 === _ref$color ? '#262626' : _ref$color,
            title = _ref.title;
          return (0, jsx_runtime.jsxs)('svg', {
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            className: className,
            children: [
              (0, jsx_runtime.jsx)('title', { children: title || 'Add icon' }),
              (0, jsx_runtime.jsx)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM13 13V18H11V13H6V11H11V6H13V11H18V13H13Z',
                fill: color,
              }),
            ],
          });
        };
      try {
        (Add.displayName = 'Add'),
          (Add.__docgenInfo = {
            description: '',
            displayName: 'Add',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Add.tsx#Add'] = {
              docgenInfo: Add.__docgenInfo,
              name: 'Add',
              path: 'src/stories/Foundation/Icon/components/Add.tsx#Add',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ArrowDown = function ArrowDown(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'ArrowDown icon' }),
            (0, jsx_runtime.jsx)('path', {
              d: 'M11.6464 19.6464L12.3536 18.9393L11.6464 19.6464ZM3.29289 12.7071L10.9393 20.3536L12.3536 18.9393L4.70711 11.2929L3.29289 12.7071ZM13.0607 20.3536L20.7071 12.7071L19.2929 11.2929L11.6464 18.9393L13.0607 20.3536ZM13 19V3L11 3V19H13ZM10.9393 20.3536C11.5251 20.9393 12.4749 20.9393 13.0607 20.3536L11.6464 18.9393C11.8417 18.7441 12.1583 18.7441 12.3536 18.9393L10.9393 20.3536Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (ArrowDown.displayName = 'ArrowDown'),
          (ArrowDown.__docgenInfo = {
            description: '',
            displayName: 'ArrowDown',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/ArrowDown.tsx#ArrowDown'] = {
              docgenInfo: ArrowDown.__docgenInfo,
              name: 'ArrowDown',
              path: 'src/stories/Foundation/Icon/components/ArrowDown.tsx#ArrowDown',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ArrowLeft = function ArrowLeft(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'ArrowLeft icon' }),
            (0, jsx_runtime.jsx)('path', {
              d: 'M4.35355 11.6464L5.06066 12.3536L4.35355 11.6464ZM11.2929 3.29289L3.64645 10.9393L5.06066 12.3536L12.7071 4.70711L11.2929 3.29289ZM3.64645 13.0607L11.2929 20.7071L12.7071 19.2929L5.06066 11.6464L3.64645 13.0607ZM5 13L21 13L21 11L5 11L5 13ZM3.64645 10.9393C3.06066 11.5251 3.06066 12.4749 3.64645 13.0607L5.06066 11.6464C5.25592 11.8417 5.25592 12.1583 5.06066 12.3536L3.64645 10.9393Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (ArrowLeft.displayName = 'ArrowLeft'),
          (ArrowLeft.__docgenInfo = {
            description: '',
            displayName: 'ArrowLeft',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/ArrowLeft.tsx#ArrowLeft'] = {
              docgenInfo: ArrowLeft.__docgenInfo,
              name: 'ArrowLeft',
              path: 'src/stories/Foundation/Icon/components/ArrowLeft.tsx#ArrowLeft',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ArrowRight = function ArrowRight(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'ArrowRight icon' }),
            (0, jsx_runtime.jsx)('path', {
              d: 'M19.6464 12.3536L18.9393 11.6464L19.6464 12.3536ZM12.7071 20.7071L20.3536 13.0607L18.9393 11.6464L11.2929 19.2929L12.7071 20.7071ZM20.3536 10.9393L12.7071 3.29289L11.2929 4.70711L18.9393 12.3536L20.3536 10.9393ZM19 11L3 11L3 13L19 13L19 11ZM20.3536 13.0607C20.9393 12.4749 20.9393 11.5251 20.3536 10.9393L18.9393 12.3536C18.7441 12.1583 18.7441 11.8417 18.9393 11.6464L20.3536 13.0607Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (ArrowRight.displayName = 'ArrowRight'),
          (ArrowRight.__docgenInfo = {
            description: '',
            displayName: 'ArrowRight',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/ArrowRight.tsx#ArrowRight'] = {
              docgenInfo: ArrowRight.__docgenInfo,
              name: 'ArrowRight',
              path: 'src/stories/Foundation/Icon/components/ArrowRight.tsx#ArrowRight',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ArrowUp = function ArrowUp(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'ArrowUp icon' }),
            (0, jsx_runtime.jsx)('path', {
              d: 'M12.3536 4.35355L11.6464 5.06066L12.3536 4.35355ZM20.7071 11.2929L13.0607 3.64645L11.6464 5.06066L19.2929 12.7071L20.7071 11.2929ZM10.9393 3.64645L3.29289 11.2929L4.70711 12.7071L12.3536 5.06066L10.9393 3.64645ZM11 5L11 21L13 21L13 5L11 5ZM13.0607 3.64645C12.4749 3.06066 11.5251 3.06066 10.9393 3.64645L12.3536 5.06066C12.1583 5.25592 11.8417 5.25592 11.6464 5.06066L13.0607 3.64645Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (ArrowUp.displayName = 'ArrowUp'),
          (ArrowUp.__docgenInfo = {
            description: '',
            displayName: 'ArrowUp',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/ArrowUp.tsx#ArrowUp'] = {
              docgenInfo: ArrowUp.__docgenInfo,
              name: 'ArrowUp',
              path: 'src/stories/Foundation/Icon/components/ArrowUp.tsx#ArrowUp',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Check = function Check(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Check icon' }),
            (0, jsx_runtime.jsx)('path', {
              d: 'M9.14645 16.1464L8.43934 16.8536L9.14645 16.1464ZM10.5607 16.8536L21.7071 5.70711L20.2929 4.29289L9.14645 15.4393L10.5607 16.8536ZM9.85355 15.4393L3.70711 9.29289L2.29289 10.7071L8.43934 16.8536L9.85355 15.4393ZM9.14645 15.4393C9.34171 15.2441 9.65829 15.2441 9.85355 15.4393L8.43934 16.8536C9.02513 17.4393 9.97487 17.4393 10.5607 16.8536L9.14645 15.4393Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (Check.displayName = 'Check'),
          (Check.__docgenInfo = {
            description: '',
            displayName: 'Check',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Check.tsx#Check'] = {
              docgenInfo: Check.__docgenInfo,
              name: 'Check',
              path: 'src/stories/Foundation/Icon/components/Check.tsx#Check',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ChevronDown = function ChevronDown(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'ChevronDown icon' }),
            (0, jsx_runtime.jsx)('path', {
              d: 'M12.3536 15.6464L13.0607 16.3536L12.3536 15.6464ZM3.29289 8.70711L10.9393 16.3536L12.3536 14.9393L4.70711 7.29289L3.29289 8.70711ZM13.0607 16.3536L20.7071 8.70711L19.2929 7.2929L11.6464 14.9393L13.0607 16.3536ZM10.9393 16.3536C11.5251 16.9393 12.4749 16.9393 13.0607 16.3536L11.6464 14.9393C11.8417 14.7441 12.1583 14.7441 12.3536 14.9393L10.9393 16.3536Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (ChevronDown.displayName = 'ChevronDown'),
          (ChevronDown.__docgenInfo = {
            description: '',
            displayName: 'ChevronDown',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/ChevronDown.tsx#ChevronDown'] = {
              docgenInfo: ChevronDown.__docgenInfo,
              name: 'ChevronDown',
              path: 'src/stories/Foundation/Icon/components/ChevronDown.tsx#ChevronDown',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ChevronLeft = function ChevronLeft(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'ChevronLeft icon' }),
            (0, jsx_runtime.jsx)('path', {
              d: 'M8.35355 12.3536L7.64645 13.0607L8.35355 12.3536ZM15.2929 3.29289L7.64645 10.9393L9.06066 12.3536L16.7071 4.70711L15.2929 3.29289ZM7.64645 13.0607L15.2929 20.7071L16.7071 19.2929L9.06066 11.6464L7.64645 13.0607ZM7.64645 10.9393C7.06066 11.5251 7.06066 12.4749 7.64645 13.0607L9.06066 11.6464C9.25592 11.8417 9.25592 12.1583 9.06066 12.3536L7.64645 10.9393Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (ChevronLeft.displayName = 'ChevronLeft'),
          (ChevronLeft.__docgenInfo = {
            description: '',
            displayName: 'ChevronLeft',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/ChevronLeft.tsx#ChevronLeft'] = {
              docgenInfo: ChevronLeft.__docgenInfo,
              name: 'ChevronLeft',
              path: 'src/stories/Foundation/Icon/components/ChevronLeft.tsx#ChevronLeft',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ChevronRight = function ChevronRight(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'ChevronRight icon' }),
            (0, jsx_runtime.jsx)('path', {
              d: 'M15.6464 11.6464L16.3536 10.9393L15.6464 11.6464ZM8.70711 20.7071L16.3536 13.0607L14.9393 11.6464L7.29289 19.2929L8.70711 20.7071ZM16.3536 10.9393L8.70711 3.29289L7.29289 4.70711L14.9393 12.3536L16.3536 10.9393ZM16.3536 13.0607C16.9393 12.4749 16.9393 11.5251 16.3536 10.9393L14.9393 12.3536C14.7441 12.1583 14.7441 11.8417 14.9393 11.6464L16.3536 13.0607Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (ChevronRight.displayName = 'ChevronRight'),
          (ChevronRight.__docgenInfo = {
            description: '',
            displayName: 'ChevronRight',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/ChevronRight.tsx#ChevronRight'] = {
              docgenInfo: ChevronRight.__docgenInfo,
              name: 'ChevronRight',
              path: 'src/stories/Foundation/Icon/components/ChevronRight.tsx#ChevronRight',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ChevronUp = function ChevronUp(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'ChevronUp icon' }),
            (0, jsx_runtime.jsx)('path', {
              d: 'M11.6464 8.35355L10.9393 7.64645L11.6464 8.35355ZM20.7071 15.2929L13.0607 7.64645L11.6464 9.06066L19.2929 16.7071L20.7071 15.2929ZM10.9393 7.64645L3.29289 15.2929L4.70711 16.7071L12.3536 9.06066L10.9393 7.64645ZM13.0607 7.64645C12.4749 7.06066 11.5251 7.06066 10.9393 7.64645L12.3536 9.06066C12.1583 9.25592 11.8417 9.25592 11.6464 9.06066L13.0607 7.64645Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (ChevronUp.displayName = 'ChevronUp'),
          (ChevronUp.__docgenInfo = {
            description: '',
            displayName: 'ChevronUp',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/ChevronUp.tsx#ChevronUp'] = {
              docgenInfo: ChevronUp.__docgenInfo,
              name: 'ChevronUp',
              path: 'src/stories/Foundation/Icon/components/ChevronUp.tsx#ChevronUp',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Cross = function Cross(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Cross icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M12.0001 13.4142L18.793 20.2071L20.2072 18.7929L13.4143 12L20.2072 5.20711L18.793 3.79289L12.0001 10.5858L5.20718 3.79289L3.79297 5.20711L10.5859 12L3.79297 18.7929L5.20718 20.2071L12.0001 13.4142Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (Cross.displayName = 'Cross'),
          (Cross.__docgenInfo = {
            description: '',
            displayName: 'Cross',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Cross.tsx#Cross'] = {
              docgenInfo: Cross.__docgenInfo,
              name: 'Cross',
              path: 'src/stories/Foundation/Icon/components/Cross.tsx#Cross',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var DesktopFraming = function DesktopFraming(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'DesktopFraming icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M1 5C1 3.89543 1.89543 3 3 3H7V5H3V9H1V5ZM21 5H17V3H21C22.1046 3 23 3.89543 23 5V9H21V5ZM3 15V19H6V17C6 15.3431 7.34315 14 9 14H15C16.6569 14 18 15.3431 18 17V19H21V15H23V19C23 20.1046 22.1046 21 21 21H18H16V17C16 16.4477 15.5523 16 15 16H9C8.44772 16 8 16.4477 8 17V21H6H3C1.89543 21 1 20.1046 1 19V15H3ZM10.5 9.5C10.5 8.67157 11.1716 8 12 8C12.8284 8 13.5 8.67157 13.5 9.5C13.5 10.3284 12.8284 11 12 11C11.1716 11 10.5 10.3284 10.5 9.5ZM12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (DesktopFraming.displayName = 'DesktopFraming'),
          (DesktopFraming.__docgenInfo = {
            description: '',
            displayName: 'DesktopFraming',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/DesktopFraming.tsx#DesktopFraming'] = {
              docgenInfo: DesktopFraming.__docgenInfo,
              name: 'DesktopFraming',
              path: 'src/stories/Foundation/Icon/components/DesktopFraming.tsx#DesktopFraming',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Edit = function Edit(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Edit icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M22.008 5.56024C22.7941 6.34023 22.7968 7.61054 22.0139 8.39381L9.70734 20.7069L9.4513 20.9631L9.09058 20.9959L3.59058 21.4959L2.39551 21.6045L2.50415 20.4095L3.00416 14.9095L3.03693 14.5489L3.29294 14.2929L15.5886 1.99724C16.3675 1.21835 17.6296 1.21588 18.4115 1.99172L22.008 5.56024ZM20.5993 6.97997L17.0028 3.41145L15.4143 5L18.9972 8.58294L20.5993 6.97997ZM17.5834 9.99753L8.5488 19.0369L4.60458 19.3955L4.96316 15.4511L14 6.41421L17.5834 9.99753ZM23 21L13 21V19L23 19V21Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (Edit.displayName = 'Edit'),
          (Edit.__docgenInfo = {
            description: '',
            displayName: 'Edit',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Edit.tsx#Edit'] = {
              docgenInfo: Edit.__docgenInfo,
              name: 'Edit',
              path: 'src/stories/Foundation/Icon/components/Edit.tsx#Edit',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Ethernet = function Ethernet(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Ethernet icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M4 3C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4ZM4 5H20V19H4V5ZM8.4 11.25H10.4V9.25V9H13.6V9.25V11.25H15.6H16V15H8V11.25H8.4ZM6 17V15V11.25V9.25H6.4H8H8.4V9V7.25V7H10.4H13.6H15.6V7.25V9V9.25H16H17.6H18V11.25V15V17H16H8H6Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (Ethernet.displayName = 'Ethernet'),
          (Ethernet.__docgenInfo = {
            description: '',
            displayName: 'Ethernet',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Ethernet.tsx#Ethernet'] = {
              docgenInfo: Ethernet.__docgenInfo,
              name: 'Ethernet',
              path: 'src/stories/Foundation/Icon/components/Ethernet.tsx#Ethernet',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Filter = function Filter(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Filter icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M9 5C9 5.55228 8.55228 6 8 6C7.44772 6 7 5.55228 7 5C7 4.44772 7.44772 4 8 4C8.55228 4 9 4.44772 9 5ZM5.17071 4H2V6H5.17071C5.58254 7.16519 6.69378 8 8 8C9.30622 8 10.4175 7.16519 10.8293 6L22 6V4L10.8293 4C10.4175 2.83481 9.30622 2 8 2C6.69378 2 5.58254 2.83481 5.17071 4ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12ZM22 12C22 13.6569 20.6569 15 19 15C17.6938 15 16.5825 14.1652 16.1707 13H2V11H16.1707C16.5825 9.83481 17.6938 9 19 9C20.6569 9 22 10.3431 22 12ZM13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19ZM14.8293 20C14.4175 21.1652 13.3062 22 12 22C10.6938 22 9.58254 21.1652 9.17071 20H2V18H9.17071C9.58254 16.8348 10.6938 16 12 16C13.3062 16 14.4175 16.8348 14.8293 18H22V20H14.8293Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (Filter.displayName = 'Filter'),
          (Filter.__docgenInfo = {
            description: '',
            displayName: 'Filter',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Filter.tsx#Filter'] = {
              docgenInfo: Filter.__docgenInfo,
              name: 'Filter',
              path: 'src/stories/Foundation/Icon/components/Filter.tsx#Filter',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ImageQuality = function ImageQuality(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'ImageQuality icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M1 6C1 4.89543 1.89543 4 3 4H18C19.1046 4 20 4.89543 20 6V8L22.7575 7.31063C23.3886 7.15285 24 7.63021 24 8.28078V15.7192C24 16.3698 23.3886 16.8472 22.7575 16.6894L20 16V18C20 19.1046 19.1046 20 18 20H3C1.89543 20 1 19.1046 1 18V6ZM20 13.9384V10.0616L22 9.56155V14.4384L20 13.9384ZM18 6V9.28078V14.7192V18H3V6L18 6ZM16 15L12.5 10L10.0566 13.4906L8.5 11L6 15H9H11H16Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (ImageQuality.displayName = 'ImageQuality'),
          (ImageQuality.__docgenInfo = {
            description: '',
            displayName: 'ImageQuality',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/ImageQuality.tsx#ImageQuality'] = {
              docgenInfo: ImageQuality.__docgenInfo,
              name: 'ImageQuality',
              path: 'src/stories/Foundation/Icon/components/ImageQuality.tsx#ImageQuality',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Menu = function Menu(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Menu icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M22 6L2 6V4H22V6ZM22 20L2 20V18L22 18V20ZM2 13H22V11H2V13Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (Menu.displayName = 'Menu'),
          (Menu.__docgenInfo = {
            description: '',
            displayName: 'Menu',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Menu.tsx#Menu'] = {
              docgenInfo: Menu.__docgenInfo,
              name: 'Menu',
              path: 'src/stories/Foundation/Icon/components/Menu.tsx#Menu',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Minus = function Minus(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Minus icon' }),
            (0, jsx_runtime.jsx)('path', { d: 'M3 12H21', stroke: color, strokeWidth: '2', fill: color }),
          ],
        });
      };
      try {
        (Minus.displayName = 'Minus'),
          (Minus.__docgenInfo = {
            description: '',
            displayName: 'Minus',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Minus.tsx#Minus'] = {
              docgenInfo: Minus.__docgenInfo,
              name: 'Minus',
              path: 'src/stories/Foundation/Icon/components/Minus.tsx#Minus',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Plus = function Plus(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Plus icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M11 13L11 21H13V13H21V11H13V3H11L11 11H3V13H11Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (Plus.displayName = 'Plus'),
          (Plus.__docgenInfo = {
            description: '',
            displayName: 'Plus',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Plus.tsx#Plus'] = {
              docgenInfo: Plus.__docgenInfo,
              name: 'Plus',
              path: 'src/stories/Foundation/Icon/components/Plus.tsx#Plus',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var PortraitLighting = function PortraitLighting(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'PortraitLighting icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M13 0.5V3H11V0.5H13ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM13 23.5V21H11V23.5H13ZM23.5 13H21V11H23.5V13ZM0.5 13H3V11H0.5V13ZM4.57429 3.16106L6.34206 4.92882L4.92785 6.34304L3.16008 4.57527L4.57429 3.16106ZM20.8382 19.4244L19.0704 17.6567L17.6562 19.0709L19.4239 20.8386L20.8382 19.4244ZM20.8399 4.57527L19.0722 6.34304L17.6579 4.92882L19.4257 3.16106L20.8399 4.57527ZM4.57606 20.8386L6.34383 19.0709L4.92961 17.6567L3.16184 19.4244L4.57606 20.8386Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (PortraitLighting.displayName = 'PortraitLighting'),
          (PortraitLighting.__docgenInfo = {
            description: '',
            displayName: 'PortraitLighting',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/PortraitLighting.tsx#PortraitLighting'] = {
              docgenInfo: PortraitLighting.__docgenInfo,
              name: 'PortraitLighting',
              path: 'src/stories/Foundation/Icon/components/PortraitLighting.tsx#PortraitLighting',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Profile = function Profile(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Profile icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.0289 19.2447 15.8814 18 17.2916V16C18 14.3431 16.6569 13 15 13H9C7.34315 13 6 14.3431 6 16V17.2916C4.75527 15.8814 4 14.0289 4 12ZM8 18.9297C9.17669 19.6104 10.5429 20 12 20C13.4571 20 14.8233 19.6104 16 18.9297V16C16 15.4477 15.5523 15 15 15H9C8.44772 15 8 15.4477 8 16V18.9297ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 7C11.1716 7 10.5 7.67157 10.5 8.5C10.5 9.32843 11.1716 10 12 10C12.8284 10 13.5 9.32843 13.5 8.5C13.5 7.67157 12.8284 7 12 7ZM8.5 8.5C8.5 6.567 10.067 5 12 5C13.933 5 15.5 6.567 15.5 8.5C15.5 10.433 13.933 12 12 12C10.067 12 8.5 10.433 8.5 8.5Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (Profile.displayName = 'Profile'),
          (Profile.__docgenInfo = {
            description: '',
            displayName: 'Profile',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Profile.tsx#Profile'] = {
              docgenInfo: Profile.__docgenInfo,
              name: 'Profile',
              path: 'src/stories/Foundation/Icon/components/Profile.tsx#Profile',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Refresh = function Refresh(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Refresh icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M19.0607 8.2346L16.4463 7.53407L15.9287 9.46593L20.7097 10.747L21.6757 11.0058L21.9345 10.0399L23.2156 5.25882L21.2837 4.74118L20.6733 7.01938C18.9478 4.02095 15.7109 2 12.0002 2C6.47733 2 2.00018 6.47715 2.00018 12C2.00018 17.5228 6.47733 22 12.0002 22C14.9619 22 17.624 20.7111 19.4536 18.6669C20.4405 17.5643 21.187 16.2402 21.6092 14.7773L19.6876 14.2227C19.3506 15.3905 18.7541 16.4496 17.9634 17.3331C16.4971 18.9713 14.3694 20 12.0002 20C7.5819 20 4.00018 16.4183 4.00018 12C4.00018 7.58172 7.5819 4 12.0002 4C15.0557 4 17.7131 5.71323 19.0607 8.2346Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (Refresh.displayName = 'Refresh'),
          (Refresh.__docgenInfo = {
            description: '',
            displayName: 'Refresh',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Refresh.tsx#Refresh'] = {
              docgenInfo: Refresh.__docgenInfo,
              name: 'Refresh',
              path: 'src/stories/Foundation/Icon/components/Refresh.tsx#Refresh',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Remove = function Remove(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Remove icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 13.4142L8.46492 16.9493L7.05071 15.5351L10.5858 12L7.0498 8.46401L8.46401 7.0498L12 10.5858L15.536 7.0498L16.9502 8.46401L13.4142 12L16.9493 15.5351L15.5351 16.9493L12 13.4142Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (Remove.displayName = 'Remove'),
          (Remove.__docgenInfo = {
            description: '',
            displayName: 'Remove',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Remove.tsx#Remove'] = {
              docgenInfo: Remove.__docgenInfo,
              name: 'Remove',
              path: 'src/stories/Foundation/Icon/components/Remove.tsx#Remove',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Settings = function Settings(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Settings icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M23 10.0019C23 8.89734 22.1046 8.00191 21 8.00191L20.6594 8.00191C19.8896 8.00191 19.4085 7.16857 19.7934 6.5019L19.9643 6.20587C20.5166 5.24928 20.1888 4.0261 19.2323 3.47382L15.7682 1.47382C14.8116 0.921534 13.5884 1.24928 13.0361 2.20587L12.865 2.50226C12.4801 3.16892 11.5178 3.16892 11.1329 2.50226L10.964 2.20958C10.4117 1.25299 9.1885 0.925244 8.23191 1.47753L4.76781 3.47753C3.81122 4.02981 3.48347 5.25299 4.03576 6.20958L4.20453 6.5019C4.58943 7.16857 4.10831 8.0019 3.33851 8.0019L3 8.0019C1.89543 8.0019 1 8.89734 1 10.0019L0.999999 14.0019C0.999999 15.1065 1.89543 16.0019 3 16.0019L3.33891 16.0019C4.10871 16.0019 4.58984 16.8352 4.20494 17.5019L4.03611 17.7943C3.48382 18.7509 3.81157 19.9741 4.76816 20.5264L8.23226 22.5264C9.18885 23.0787 10.412 22.7509 10.9643 21.7943L11.1329 21.5023C11.5178 20.8356 12.4801 20.8356 12.865 21.5023L13.0358 21.798C13.588 22.7546 14.8112 23.0824 15.7678 22.5301L19.2319 20.5301C20.1885 19.9778 20.5162 18.7546 19.964 17.798L19.793 17.5019C19.4081 16.8352 19.8892 16.0019 20.659 16.0019L21 16.0019C22.1046 16.0019 23 15.1065 23 14.0019L23 10.0019ZM21 10.0019L21 14.0019L20.659 14.0019C18.3496 14.0019 16.9062 16.5019 18.0609 18.5019L18.2319 18.798L14.7678 20.798L14.597 20.5023C13.4423 18.5023 10.5556 18.5023 9.40089 20.5023L9.23226 20.7943L5.76816 18.7943L5.93699 18.5019C7.09169 16.5019 5.64831 14.0019 3.33891 14.0019L3 14.0019L3 10.0019L3.33851 10.0019C5.64791 10.0019 7.09128 7.5019 5.93658 5.50191L5.76781 5.20958L9.23191 3.20958L9.40089 3.50226C10.5556 5.50226 13.4423 5.50226 14.597 3.50226L14.7682 3.20587L18.2323 5.20587L18.0613 5.5019C16.9066 7.5019 18.35 10.0019 20.6594 10.0019L21 10.0019ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9ZM17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (Settings.displayName = 'Settings'),
          (Settings.__docgenInfo = {
            description: '',
            displayName: 'Settings',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Settings.tsx#Settings'] = {
              docgenInfo: Settings.__docgenInfo,
              name: 'Settings',
              path: 'src/stories/Foundation/Icon/components/Settings.tsx#Settings',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var SpeakerFraming = function SpeakerFraming(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'SpeakerFraming icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M3 3C1.89543 3 1 3.89543 1 5V8H3V5H6V3H3ZM3 19V16H1V19C1 20.1046 1.89543 21 3 21H5H6H7V17C7 16.4477 7.44772 16 8 16H13C13.5523 16 14 16.4477 14 17V21H16V17C16 15.3431 14.6569 14 13 14H8C6.34315 14 5 15.3431 5 17V19H3ZM21 16V19H18V21H21C22.1046 21 23 20.1046 23 19V16H21ZM18.5 3C16.567 3 15 4.567 15 6.5V10V11H16H19.5C21.433 11 23 9.433 23 7.5V6.5C23 4.567 21.433 3 19.5 3H18.5ZM17 6.5C17 5.67157 17.6716 5 18.5 5H19.5C20.3284 5 21 5.67157 21 6.5V7.5C21 8.32843 20.3284 9 19.5 9H17V6.5ZM9 9.5C9 8.67157 9.67157 8 10.5 8C11.3284 8 12 8.67157 12 9.5C12 10.3284 11.3284 11 10.5 11C9.67157 11 9 10.3284 9 9.5ZM10.5 6C8.567 6 7 7.567 7 9.5C7 11.433 8.567 13 10.5 13C12.433 13 14 11.433 14 9.5C14 7.567 12.433 6 10.5 6Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (SpeakerFraming.displayName = 'SpeakerFraming'),
          (SpeakerFraming.__docgenInfo = {
            description: '',
            displayName: 'SpeakerFraming',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/SpeakerFraming.tsx#SpeakerFraming'] = {
              docgenInfo: SpeakerFraming.__docgenInfo,
              name: 'SpeakerFraming',
              path: 'src/stories/Foundation/Icon/components/SpeakerFraming.tsx#SpeakerFraming',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Update = function Update(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsxs)('g', {
              clipPath: 'url(#clip0_262_10546)',
              children: [
                (0, jsx_runtime.jsx)('title', { children: title || 'Update icon' }),
                (0, jsx_runtime.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M4.93933 15.7654L7.55371 16.4659L8.07135 14.5341L3.29026 13.253L2.32433 12.9942L2.06551 13.9601L0.784424 18.7412L2.71628 19.2588L3.32672 16.9806C5.05224 19.9791 8.2891 22 11.9998 22C16.3554 22 20.0582 19.2159 21.4306 15.3332L19.5449 14.6668C18.4462 17.7753 15.4815 20 11.9998 20C8.94427 20 6.28689 18.2868 4.93933 15.7654ZM19.0607 8.2346C17.7132 5.71323 15.0558 4 12.0002 4C8.51854 4 5.5539 6.22472 4.45519 9.33325L2.56951 8.66675C3.94182 4.78413 7.64461 2 12.0002 2C15.711 2 18.9478 4.02095 20.6733 7.01939L21.2838 4.74118L23.2156 5.25882L21.9345 10.0399L21.6757 11.0058L20.7098 10.747L15.9287 9.46593L16.4463 7.53407L19.0607 8.2346Z',
                  fill: color,
                }),
              ],
            }),
            (0, jsx_runtime.jsx)('defs', {
              children: (0, jsx_runtime.jsx)('clipPath', {
                id: 'clip0_262_10546',
                children: (0, jsx_runtime.jsx)('rect', {
                  width: '24',
                  height: '24',
                  fill: 'white',
                  transform: 'matrix(1 1.74846e-07 1.74846e-07 -1 0 24)',
                }),
              }),
            }),
          ],
        });
      };
      try {
        (Update.displayName = 'Update'),
          (Update.__docgenInfo = {
            description: '',
            displayName: 'Update',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Update.tsx#Update'] = {
              docgenInfo: Update.__docgenInfo,
              name: 'Update',
              path: 'src/stories/Foundation/Icon/components/Update.tsx#Update',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Usb = function Usb(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Usb icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M10 2H14V6H10V2ZM8 6.26756V6V2C8 0.895431 8.89543 0 10 0H14C15.1046 0 16 0.895431 16 2V6V6.26756C16.5978 6.61337 17 7.25972 17 8V17C17 18.1046 16.1046 19 15 19H14V21H13V22V23V24H11V23V22V21H10V19H9C7.89543 19 7 18.1046 7 17V8C7 7.25972 7.4022 6.61337 8 6.26756ZM9 8L9 17H15V8H14H10H9Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (Usb.displayName = 'Usb'),
          (Usb.__docgenInfo = {
            description: '',
            displayName: 'Usb',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Usb.tsx#Usb'] = {
              docgenInfo: Usb.__docgenInfo,
              name: 'Usb',
              path: 'src/stories/Foundation/Icon/components/Usb.tsx#Usb',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var User = function User(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'User icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M9.25 5.75C9.25 4.23122 10.4812 3 12 3C13.5188 3 14.75 4.23122 14.75 5.75C14.75 7.26878 13.5188 8.5 12 8.5C10.4812 8.5 9.25 7.26878 9.25 5.75ZM12 1C9.37665 1 7.25 3.12665 7.25 5.75C7.25 8.37335 9.37665 10.5 12 10.5C14.6234 10.5 16.75 8.37335 16.75 5.75C16.75 3.12665 14.6234 1 12 1ZM8 12C5.79086 12 4 13.7909 4 16V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V16C20 13.7909 18.2091 12 16 12H8ZM6 16C6 14.8954 6.89543 14 8 14H16C17.1046 14 18 14.8954 18 16V20H6V16Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (User.displayName = 'User'),
          (User.__docgenInfo = {
            description: '',
            displayName: 'User',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/User.tsx#User'] = {
              docgenInfo: User.__docgenInfo,
              name: 'User',
              path: 'src/stories/Foundation/Icon/components/User.tsx#User',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Users = function Users(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'Users icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M5 5.5C5 4.39543 5.89543 3.5 7 3.5C8.10457 3.5 9 4.39543 9 5.5C9 6.60457 8.10457 7.5 7 7.5C5.89543 7.5 5 6.60457 5 5.5ZM7 1.5C4.79086 1.5 3 3.29086 3 5.5C3 7.70914 4.79086 9.5 7 9.5C9.20914 9.5 11 7.70914 11 5.5C11 3.29086 9.20914 1.5 7 1.5ZM5 11C2.79086 11 1 12.7909 1 15V20C1 21.1046 1.89543 22 3 22H12H21C22.1046 22 23 21.1046 23 20V17C23 14.7909 21.2091 13 19 13H13.4649C12.7733 11.8044 11.4806 11 10 11H5ZM21 20H14V15H19C20.1046 15 21 15.8954 21 17V20ZM3 15C3 13.8954 3.89543 13 5 13H10C11.1046 13 12 13.8954 12 15V20H3V15ZM15 7.5C15 6.39543 15.8954 5.5 17 5.5C18.1046 5.5 19 6.39543 19 7.5C19 8.60457 18.1046 9.5 17 9.5C15.8954 9.5 15 8.60457 15 7.5ZM17 3.5C14.7909 3.5 13 5.29086 13 7.5C13 9.70914 14.7909 11.5 17 11.5C19.2091 11.5 21 9.70914 21 7.5C21 5.29086 19.2091 3.5 17 3.5Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (Users.displayName = 'Users'),
          (Users.__docgenInfo = {
            description: '',
            displayName: 'Users',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/Users.tsx#Users'] = {
              docgenInfo: Users.__docgenInfo,
              name: 'Users',
              path: 'src/stories/Foundation/Icon/components/Users.tsx#Users',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var WideAngle = function WideAngle(_ref) {
        var className = _ref.className,
          _ref$color = _ref.color,
          color = void 0 === _ref$color ? '#262626' : _ref$color,
          title = _ref.title;
        return (0, jsx_runtime.jsxs)('svg', {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          className: className,
          children: [
            (0, jsx_runtime.jsx)('title', { children: title || 'WideAngle icon' }),
            (0, jsx_runtime.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M4 12.523V4.47703L7 5.67703V11.323L4 12.523ZM9 11H15V5.99999H9V11ZM17 5.67703V11.323L20 12.523V4.47703L17 5.67703ZM15.8074 13H8.19258L4.05709 14.6542C3.07179 15.0483 2 14.3227 2 13.2615V3.73851C2 2.67731 3.07179 1.95168 4.05709 2.34579L8.19258 3.99999H15.8074L19.9429 2.34579C20.9282 1.95168 22 2.67731 22 3.73851V13.2615C22 14.3227 20.9282 15.0483 19.9429 14.6542L15.8074 13ZM20.7071 18.2929L17.7071 15.2929L16.2929 16.7071L17.5858 18H6.41421L7.70711 16.7071L6.29289 15.2929L3.29289 18.2929L2.58579 19L3.29289 19.7071L6.29289 22.7071L7.70711 21.2929L6.41421 20H17.5858L16.2929 21.2929L17.7071 22.7071L20.7071 19.7071L21.4142 19L20.7071 18.2929Z',
              fill: color,
            }),
          ],
        });
      };
      try {
        (WideAngle.displayName = 'WideAngle'),
          (WideAngle.__docgenInfo = {
            description: '',
            displayName: 'WideAngle',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: '#262626' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/components/WideAngle.tsx#WideAngle'] = {
              docgenInfo: WideAngle.__docgenInfo,
              name: 'WideAngle',
              path: 'src/stories/Foundation/Icon/components/WideAngle.tsx#WideAngle',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/Icon/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        J: function () {
          return Icon;
        },
      });
      __webpack_require__('./node_modules/react/index.js');
      var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './src/stories/Foundation/Icon/components/index.ts'
        ),
        _shared_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/shared/colors.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Icon = function Icon(_ref) {
          var className = _ref.className,
            name = _ref.name,
            _ref$color = _ref.color,
            color = void 0 === _ref$color ? 'black' : _ref$color,
            Icon = (function getIcon(name) {
              if (!_components__WEBPACK_IMPORTED_MODULE_1__[name]) throw new Error('Invalid icon: '.concat(name));
              return _components__WEBPACK_IMPORTED_MODULE_1__[name];
            })(name);
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {
            className: className,
            color: (0, _shared_colors__WEBPACK_IMPORTED_MODULE_2__.Xv)(color),
          });
        };
      try {
        (Icon.displayName = 'Icon'),
          (Icon.__docgenInfo = {
            description: 'Icon component',
            displayName: 'Icon',
            props: {
              name: {
                defaultValue: null,
                description: '',
                name: 'name',
                required: !0,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"Add"' },
                    { value: '"ArrowDown"' },
                    { value: '"ArrowLeft"' },
                    { value: '"ArrowRight"' },
                    { value: '"ArrowUp"' },
                    { value: '"Check"' },
                    { value: '"ChevronDown"' },
                    { value: '"ChevronLeft"' },
                    { value: '"ChevronRight"' },
                    { value: '"ChevronUp"' },
                    { value: '"Cross"' },
                    { value: '"DesktopFraming"' },
                    { value: '"Edit"' },
                    { value: '"Ethernet"' },
                    { value: '"Filter"' },
                    { value: '"ImageQuality"' },
                    { value: '"Menu"' },
                    { value: '"Minus"' },
                    { value: '"Plus"' },
                    { value: '"PortraitLighting"' },
                    { value: '"Profile"' },
                    { value: '"Refresh"' },
                    { value: '"Remove"' },
                    { value: '"Settings"' },
                    { value: '"SpeakerFraming"' },
                    { value: '"Update"' },
                    { value: '"Usb"' },
                    { value: '"User"' },
                    { value: '"Users"' },
                    { value: '"WideAngle"' },
                  ],
                },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: 'black' },
                description: '',
                name: 'color',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"black"' },
                    { value: '"lavender"' },
                    { value: '"whisperBlue"' },
                    { value: '"plumbagoBlue"' },
                    { value: '"salviaBlue"' },
                    { value: '"royalBlue"' },
                    { value: '"marineBlue"' },
                    { value: '"whisperYellow"' },
                    { value: '"cheesecakeYellow"' },
                    { value: '"sunYellow"' },
                    { value: '"dijonYellow"' },
                    { value: '"curryYellow"' },
                    { value: '"autumnYellow"' },
                    { value: '"whisperCoral"' },
                    { value: '"cantaloupeOrange"' },
                    { value: '"papayaOrange"' },
                    { value: '"fireOrange"' },
                    { value: '"burntOrange"' },
                    { value: '"rustRed"' },
                    { value: '"whisperTaupe"' },
                    { value: '"macaronTaupe"' },
                    { value: '"eveningTaupe"' },
                    { value: '"clayTaupe"' },
                    { value: '"chestnutTaupe"' },
                    { value: '"rosewoodTaupe"' },
                    { value: '"whisperPink"' },
                    { value: '"candyflossPink"' },
                    { value: '"petitePink"' },
                    { value: '"balloonPink"' },
                    { value: '"passionPink"' },
                    { value: '"burntPink"' },
                    { value: '"whisperOrange"' },
                    { value: '"apricotOrange"' },
                    { value: '"caramelBrown"' },
                    { value: '"cinnamonBrown"' },
                    { value: '"leatherBrown"' },
                    { value: '"chocolateBrown"' },
                    { value: '"whisperGreen"' },
                    { value: '"greenTea"' },
                    { value: '"springGreen"' },
                    { value: '"oliveGreen"' },
                    { value: '"mossGreen"' },
                    { value: '"oreganoGreen"' },
                    { value: '"coralOrange"' },
                    { value: '"signalOrange"' },
                    { value: '"intenseOrange"' },
                    { value: '"hotOrange"' },
                    { value: '"redWine"' },
                    { value: '"grey98"' },
                    { value: '"grey96"' },
                    { value: '"grey91"' },
                    { value: '"grey86"' },
                    { value: '"grey76"' },
                    { value: '"grey62"' },
                    { value: '"grey45"' },
                    { value: '"grey35"' },
                    { value: '"grey25"' },
                    { value: '"grey15"' },
                    { value: '"grey10"' },
                    { value: '"white"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Icon/index.tsx#Icon'] = {
              docgenInfo: Icon.__docgenInfo,
              name: 'Icon',
              path: 'src/stories/Foundation/Icon/index.tsx#Icon',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/IconButton/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        h: function () {
          return IconButton;
        },
      });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        _Flex__WEBPACK_IMPORTED_MODULE_1__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./src/stories/Foundation/Flex/index.tsx')),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/stories/Foundation/Icon/index.tsx'),
        _Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./src/stories/Foundation/Spinner/index.tsx'),
        _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./src/stories/Foundation/Text/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        ButtonElement = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.button(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  cursor: pointer;\n  border: none;\n  background: none;\n  padding: 0;\n  width: var(--spacing-24);\n  height: var(--spacing-24);\n  border-radius: 2px;\n  position: relative;\n\n  &:hover {\n    background: var(--color-grey91);\n    box-shadow: 0px 0px 0px 3px var(--color-grey91);\n    div {\n      display: flex;\n    }\n  }\n\n  path {\n    fill: ',
                ';\n  }\n',
              ]
            )),
          function (p) {
            return 'var(--color-'.concat(p.color, ')');
          }
        ),
        ToolTip = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(_Flex__WEBPACK_IMPORTED_MODULE_1__.k)(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -135%;\n  transform: translateX(-50%);\n',
              ]
            ))
        ),
        ToolTipText = (0, styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)(_Text__WEBPACK_IMPORTED_MODULE_4__.x)(
          _templateObject3 ||
            (_templateObject3 = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              ['\n  background: black;\n  padding: var(--spacing-4) var(--spacing-8);\n  border-radius: 2px;\n']
            ))
        ),
        Triangle = styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.span(
          _templateObject4 ||
            (_templateObject4 = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
              [
                '\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid black;\n',
              ]
            ))
        ),
        IconButton = function IconButton(_ref) {
          var className = _ref.className,
            _ref$color = _ref.color,
            color = void 0 === _ref$color ? 'grey15' : _ref$color,
            disabled = _ref.disabled,
            loading = _ref.loading,
            onClick = _ref.onClick,
            _ref$type = _ref.type,
            type = void 0 === _ref$type ? 'button' : _ref$type,
            icon = _ref.icon,
            tooltipText = _ref.tooltipText;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ButtonElement, {
            'aria-busy': loading,
            className: className,
            color: color,
            disabled: disabled || loading,
            onClick: onClick,
            type: type,
            children: [
              loading &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Spinner__WEBPACK_IMPORTED_MODULE_3__.$, {
                  size: 24,
                }),
              !loading &&
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
                  {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.J, {
                        name: icon,
                      }),
                      tooltipText &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ToolTip, {
                          direction: 'column',
                          children: [
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ToolTipText, {
                              color: 'white',
                              children: tooltipText,
                            }),
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Triangle, {}),
                          ],
                        }),
                    ],
                  }
                ),
            ],
          });
        };
      try {
        (IconButton.displayName = 'IconButton'),
          (IconButton.__docgenInfo = {
            description: 'Icon Button component',
            displayName: 'IconButton',
            props: {
              icon: {
                defaultValue: null,
                description: '',
                name: 'icon',
                required: !0,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"Add"' },
                    { value: '"ArrowDown"' },
                    { value: '"ArrowLeft"' },
                    { value: '"ArrowRight"' },
                    { value: '"ArrowUp"' },
                    { value: '"Check"' },
                    { value: '"ChevronDown"' },
                    { value: '"ChevronLeft"' },
                    { value: '"ChevronRight"' },
                    { value: '"ChevronUp"' },
                    { value: '"Cross"' },
                    { value: '"DesktopFraming"' },
                    { value: '"Edit"' },
                    { value: '"Ethernet"' },
                    { value: '"Filter"' },
                    { value: '"ImageQuality"' },
                    { value: '"Menu"' },
                    { value: '"Minus"' },
                    { value: '"Plus"' },
                    { value: '"PortraitLighting"' },
                    { value: '"Profile"' },
                    { value: '"Refresh"' },
                    { value: '"Remove"' },
                    { value: '"Settings"' },
                    { value: '"SpeakerFraming"' },
                    { value: '"Update"' },
                    { value: '"Usb"' },
                    { value: '"User"' },
                    { value: '"Users"' },
                    { value: '"WideAngle"' },
                  ],
                },
              },
              tooltipText: {
                defaultValue: null,
                description: '',
                name: 'tooltipText',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: 'grey15' },
                description: '',
                name: 'color',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"black"' },
                    { value: '"lavender"' },
                    { value: '"whisperBlue"' },
                    { value: '"plumbagoBlue"' },
                    { value: '"salviaBlue"' },
                    { value: '"royalBlue"' },
                    { value: '"marineBlue"' },
                    { value: '"whisperYellow"' },
                    { value: '"cheesecakeYellow"' },
                    { value: '"sunYellow"' },
                    { value: '"dijonYellow"' },
                    { value: '"curryYellow"' },
                    { value: '"autumnYellow"' },
                    { value: '"whisperCoral"' },
                    { value: '"cantaloupeOrange"' },
                    { value: '"papayaOrange"' },
                    { value: '"fireOrange"' },
                    { value: '"burntOrange"' },
                    { value: '"rustRed"' },
                    { value: '"whisperTaupe"' },
                    { value: '"macaronTaupe"' },
                    { value: '"eveningTaupe"' },
                    { value: '"clayTaupe"' },
                    { value: '"chestnutTaupe"' },
                    { value: '"rosewoodTaupe"' },
                    { value: '"whisperPink"' },
                    { value: '"candyflossPink"' },
                    { value: '"petitePink"' },
                    { value: '"balloonPink"' },
                    { value: '"passionPink"' },
                    { value: '"burntPink"' },
                    { value: '"whisperOrange"' },
                    { value: '"apricotOrange"' },
                    { value: '"caramelBrown"' },
                    { value: '"cinnamonBrown"' },
                    { value: '"leatherBrown"' },
                    { value: '"chocolateBrown"' },
                    { value: '"whisperGreen"' },
                    { value: '"greenTea"' },
                    { value: '"springGreen"' },
                    { value: '"oliveGreen"' },
                    { value: '"mossGreen"' },
                    { value: '"oreganoGreen"' },
                    { value: '"coralOrange"' },
                    { value: '"signalOrange"' },
                    { value: '"intenseOrange"' },
                    { value: '"hotOrange"' },
                    { value: '"redWine"' },
                    { value: '"grey98"' },
                    { value: '"grey96"' },
                    { value: '"grey91"' },
                    { value: '"grey86"' },
                    { value: '"grey76"' },
                    { value: '"grey62"' },
                    { value: '"grey45"' },
                    { value: '"grey35"' },
                    { value: '"grey25"' },
                    { value: '"grey15"' },
                    { value: '"grey10"' },
                    { value: '"white"' },
                  ],
                },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              loading: {
                defaultValue: null,
                description: '',
                name: 'loading',
                required: !1,
                type: { name: 'boolean' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '() => void' },
              },
              type: {
                defaultValue: { value: 'button' },
                description: '',
                name: 'type',
                required: !1,
                type: { name: 'enum', value: [{ value: '"button"' }, { value: '"submit"' }, { value: '"reset"' }] },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/IconButton/index.tsx#IconButton'] = {
              docgenInfo: IconButton.__docgenInfo,
              name: 'IconButton',
              path: 'src/stories/Foundation/IconButton/index.tsx#IconButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/Spinner/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        $: function () {
          return Spinner;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        SpinnerElement = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              [
                '\n  display: inline-block;\n  width: ',
                ';\n  height: ',
                ';\n  border: ',
                ';\n  border-top-color: transparent;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n',
              ]
            )),
          function (p) {
            return 'var(--spacing-'.concat(p.size, ')');
          },
          function (p) {
            return 'var(--spacing-'.concat(p.size, ')');
          },
          function (p) {
            return 'solid calc(var(--spacing-'.concat(p.size, ') * 0.1) var(--color-').concat(p.color, ')');
          }
        ),
        Spinner = function Spinner(_ref) {
          var className = _ref.className,
            _ref$color = _ref.color,
            color = void 0 === _ref$color ? 'black' : _ref$color,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? 32 : _ref$size;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SpinnerElement, {
            className: className,
            color: color,
            size: size,
          });
        };
      try {
        (Spinner.displayName = 'Spinner'),
          (Spinner.__docgenInfo = {
            description: 'Badge component',
            displayName: 'Spinner',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: { value: 'black' },
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'enum', value: [{ value: '"black"' }, { value: '"lavender"' }, { value: '"white"' }] },
              },
              size: {
                defaultValue: { value: '32' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '0' },
                    { value: '4' },
                    { value: '8' },
                    { value: '16' },
                    { value: '24' },
                    { value: '32' },
                    { value: '40' },
                    { value: '48' },
                    { value: '56' },
                    { value: '64' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Spinner/index.tsx#Spinner'] = {
              docgenInfo: Spinner.__docgenInfo,
              name: 'Spinner',
              path: 'src/stories/Foundation/Spinner/index.tsx#Spinner',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/Table/TableRow.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        S: function () {
          return TableRow;
        },
      });
      var _templateObject,
        _templateObject2,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./node_modules/react/index.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        _Forms_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/stories/Forms/Button/index.tsx'),
        _IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./src/stories/Foundation/IconButton/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        TD = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.td(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              ['\n  text-align: ', ';\n']
            )),
          function (p) {
            return p.align;
          }
        ),
        TR = styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.tr(
          _templateObject2 ||
            (_templateObject2 = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              [
                '\n  background-color: white;\n  height: var(--spacing-48);\n  &:hover {\n    background-color: var(--color-grey96);\n  }\n',
              ]
            ))
        ),
        TableRow = function TableRow(_ref) {
          var columns = _ref.columns,
            row = _ref.row,
            onSave = _ref.onSave,
            removeRow = _ref.removeRow,
            _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(row.isNewRow),
            _useState2 = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              _useState,
              2
            ),
            isEditing = _useState2[0],
            setIsEditing = _useState2[1],
            _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(row),
            _useState4 = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
              _useState3,
              2
            ),
            rowValue = _useState4[0],
            setRowValue = _useState4[1],
            toggleEditing = function toggleEditing() {
              isEditing && onSave(rowValue), setIsEditing(!isEditing);
            };
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(TR, {
            children: [
              columns.map(function (_ref2, i) {
                var _rowValue$columnKey,
                  _ref2$align = _ref2.align,
                  align = void 0 === _ref2$align ? 'left' : _ref2$align,
                  columnKey = _ref2.columnKey,
                  editFormatter = _ref2.editFormatter,
                  valueFormatter = _ref2.valueFormatter,
                  isSortable = _ref2.isSortable,
                  renderValue = valueFormatter
                    ? valueFormatter(rowValue)
                    : null !== (_rowValue$columnKey = rowValue[columnKey]) && void 0 !== _rowValue$columnKey
                    ? _rowValue$columnKey
                    : '';
                return (
                  isEditing && editFormatter && (renderValue = editFormatter(rowValue, setRowValue)),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                    react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                    {
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(TD, {
                          align: align,
                          children: renderValue,
                        }),
                        isSortable &&
                          'right' === align &&
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(TD, { align: 'right' }),
                      ],
                    },
                    'column_'.concat(i, '_row_').concat(row.id, '}')
                  )
                );
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(TD, {
                align: 'right',
                children: [
                  isEditing &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      _Forms_Button__WEBPACK_IMPORTED_MODULE_1__.z,
                      {
                        onClick: function onCancel() {
                          row.isNewRow && removeRow(row.id), setRowValue(row), setIsEditing(!1);
                        },
                        secondary: !0,
                        children: 'Cancel',
                      }
                    ),
                  row.isEditable &&
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                      {
                        children: [
                          isEditing &&
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                              _Forms_Button__WEBPACK_IMPORTED_MODULE_1__.z,
                              { onClick: toggleEditing, children: isEditing ? 'Save' : 'Edit' }
                            ),
                          !isEditing &&
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                              _IconButton__WEBPACK_IMPORTED_MODULE_2__.h,
                              { onClick: toggleEditing, icon: 'Edit', tooltipText: 'Edit' }
                            ),
                        ],
                      }
                    ),
                ],
              }),
            ],
          });
        };
      try {
        (TableRow.displayName = 'TableRow'),
          (TableRow.__docgenInfo = {
            description: '',
            displayName: 'TableRow',
            props: {
              columns: {
                defaultValue: null,
                description: '',
                name: 'columns',
                required: !0,
                type: { name: 'TableColumn[]' },
              },
              row: { defaultValue: null, description: '', name: 'row', required: !0, type: { name: 'TableData' } },
              onSave: {
                defaultValue: null,
                description: '',
                name: 'onSave',
                required: !1,
                type: { name: '(row: TableData) => void' },
              },
              removeRow: {
                defaultValue: null,
                description: '',
                name: 'removeRow',
                required: !0,
                type: { name: '(rowId: string) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Table/TableRow.tsx#TableRow'] = {
              docgenInfo: TableRow.__docgenInfo,
              name: 'TableRow',
              path: 'src/stories/Foundation/Table/TableRow.tsx#TableRow',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/Table/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        i: function () {
          return Table;
        },
      });
      var _templateObject,
        TableHeaderItem_templateObject,
        objectSpread2 = __webpack_require__('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        TableRow = __webpack_require__('./src/stories/Foundation/Table/TableRow.tsx'),
        Flex = __webpack_require__('./src/stories/Foundation/Flex/index.tsx'),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Wrapper = styled_components_browser_esm.ZP.button(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  padding-left: var(--spacing-8);\n  background: none;\n  border: none;\n  transform: rotate(\n    ',
              '\n  );\n  fill: ',
              ';\n',
            ])),
          function (p) {
            return 'ASC' !== p.direction && p.currentSorting ? '180deg' : '0deg';
          },
          function (p) {
            return p.currentSorting ? 'var(--color-lavender)' : 'black';
          }
        ),
        Carrot = function Carrot(_ref) {
          var onClick = _ref.onClick,
            currentSorting = _ref.currentSorting,
            direction = _ref.direction;
          return (0, jsx_runtime.jsx)(Wrapper, {
            onClick: onClick,
            currentSorting: currentSorting,
            direction: direction,
            children: (0, jsx_runtime.jsx)('svg', {
              height: '9',
              width: '13',
              children: (0, jsx_runtime.jsx)('polygon', { points: '0,0 13,0 6.5,9' }),
            }),
          });
        };
      try {
        (Carrot.displayName = 'Carrot'),
          (Carrot.__docgenInfo = {
            description: '',
            displayName: 'Carrot',
            props: {
              currentSorting: {
                defaultValue: null,
                description: '',
                name: 'currentSorting',
                required: !0,
                type: { name: 'boolean' },
              },
              direction: {
                defaultValue: null,
                description: '',
                name: 'direction',
                required: !0,
                type: { name: 'enum', value: [{ value: '"ASC"' }, { value: '"DESC"' }] },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !0,
                type: { name: '() => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Table/Carrot.tsx#Carrot'] = {
              docgenInfo: Carrot.__docgenInfo,
              name: 'Carrot',
              path: 'src/stories/Foundation/Table/Carrot.tsx#Carrot',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var TH = styled_components_browser_esm.ZP.th(
          TableHeaderItem_templateObject ||
            (TableHeaderItem_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  text-align: ',
              ';\n  font-size: var(--font-size-14);\n  font-weight: normal;\n  color: var(--color-grey35);\n  width: ',
              ';\n',
            ])),
          function (p) {
            return p.align;
          },
          function (p) {
            var _p$width;
            return null !== (_p$width = p.width) && void 0 !== _p$width ? _p$width : 'auto';
          }
        ),
        invertedDirection = { ASC: 'DESC', DESC: 'ASC' },
        TableHeaderItem = function TableHeaderItem(_ref) {
          var ordering = _ref.ordering,
            columnKey = _ref.columnKey,
            header = _ref.header,
            _ref$align = _ref.align,
            align = void 0 === _ref$align ? 'left' : _ref$align,
            width = _ref.width,
            isSortable = _ref.isSortable,
            setOrdering = _ref.setOrdering,
            onClick = function onClick() {
              var direction = ordering.field === columnKey ? invertedDirection[ordering.direction] : 'ASC';
              setOrdering({ field: columnKey, direction: direction });
            };
          return (0, jsx_runtime.jsxs)(
            react.Fragment,
            {
              children: [
                (0, jsx_runtime.jsx)(TH, {
                  align: align,
                  width: width,
                  children: (0, jsx_runtime.jsxs)(Flex.k, {
                    justify: 'right' === align ? 'flex-end' : 'flex-start',
                    children: [
                      header,
                      isSortable &&
                        'right' !== align &&
                        (0, jsx_runtime.jsx)(Carrot, {
                          onClick: onClick,
                          currentSorting: ordering.field === columnKey,
                          direction: ordering.direction,
                        }),
                    ],
                  }),
                }),
                isSortable &&
                  'right' === align &&
                  (0, jsx_runtime.jsx)(TH, {
                    align: 'right',
                    width: '30px',
                    children: (0, jsx_runtime.jsx)(Carrot, {
                      onClick: onClick,
                      currentSorting: ordering.field === columnKey,
                      direction: ordering.direction,
                    }),
                  }),
              ],
            },
            'header_column_'.concat(columnKey)
          );
        },
        Table_TableHeaderItem = TableHeaderItem;
      try {
        (TableHeaderItem.displayName = 'TableHeaderItem'),
          (TableHeaderItem.__docgenInfo = {
            description: '',
            displayName: 'TableHeaderItem',
            props: {
              ordering: {
                defaultValue: null,
                description: '',
                name: 'ordering',
                required: !0,
                type: { name: 'Ordering' },
              },
              columnKey: {
                defaultValue: null,
                description: '',
                name: 'columnKey',
                required: !0,
                type: { name: 'string' },
              },
              header: {
                defaultValue: null,
                description: '',
                name: 'header',
                required: !0,
                type: { name: 'ReactNode' },
              },
              align: {
                defaultValue: { value: 'left' },
                description: '',
                name: 'align',
                required: !1,
                type: { name: 'enum', value: [{ value: '"center"' }, { value: '"left"' }, { value: '"right"' }] },
              },
              width: { defaultValue: null, description: '', name: 'width', required: !1, type: { name: 'string' } },
              isSortable: {
                defaultValue: null,
                description: '',
                name: 'isSortable',
                required: !1,
                type: { name: 'boolean' },
              },
              setOrdering: {
                defaultValue: null,
                description: '',
                name: 'setOrdering',
                required: !0,
                type: { name: '(ordering: Ordering) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Table/TableHeaderItem.tsx#TableHeaderItem'] = {
              docgenInfo: TableHeaderItem.__docgenInfo,
              name: 'TableHeaderItem',
              path: 'src/stories/Foundation/Table/TableHeaderItem.tsx#TableHeaderItem',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Table_templateObject,
        _templateObject2,
        Spinner = __webpack_require__('./src/stories/Foundation/Spinner/index.tsx'),
        StyledTable = styled_components_browser_esm.ZP.table(
          Table_templateObject ||
            (Table_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  width: ',
              ';\n  border-spacing: 0;\n  font-size: var(--font-size-16);\n',
            ])),
          function (p) {
            return p.fullWidth ? '100%' : 'auto';
          }
        ),
        HeaderRow = styled_components_browser_esm.ZP.thead(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  th {\n    border-bottom: 1px solid var(--color-grey91);\n  }\n',
            ]))
        ),
        Table = function Table(_ref) {
          var className = _ref.className,
            columns = _ref.columns,
            rows = _ref.rows,
            fullWidth = _ref.fullWidth,
            ordering = _ref.ordering,
            setOrdering = _ref.setOrdering,
            onSaveNewRow = _ref.onSaveNewRow,
            onSaveRow = _ref.onSaveRow,
            removeRow = _ref.removeRow,
            loading = _ref.loading;
          return (0, jsx_runtime.jsxs)(StyledTable, {
            fullWidth: fullWidth,
            className: className,
            children: [
              (0, jsx_runtime.jsx)(HeaderRow, {
                children: (0, jsx_runtime.jsxs)('tr', {
                  children: [
                    columns.map(function (c) {
                      return (0,
                      jsx_runtime.jsx)(Table_TableHeaderItem, (0, objectSpread2.Z)((0, objectSpread2.Z)({}, c), {}, { ordering: ordering, setOrdering: setOrdering }), ''.concat(c.columnKey, '_header'));
                    }),
                    (0, jsx_runtime.jsx)('th', {}),
                  ],
                }),
              }),
              (0, jsx_runtime.jsxs)('tbody', {
                children: [
                  loading && (0, jsx_runtime.jsx)(Spinner.$, {}),
                  !loading &&
                    rows.map(function (r) {
                      return (0,
                      jsx_runtime.jsx)(TableRow.S, { columns: columns, row: r, onSave: r.isNewRow ? onSaveNewRow : onSaveRow, removeRow: removeRow }, 'row_'.concat(r.id));
                    }),
                ],
              }),
            ],
          });
        };
      try {
        (Table.displayName = 'Table'),
          (Table.__docgenInfo = {
            description: 'Table component',
            displayName: 'Table',
            props: {
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              rows: { defaultValue: null, description: '', name: 'rows', required: !0, type: { name: 'TableData[]' } },
              columns: {
                defaultValue: null,
                description: '',
                name: 'columns',
                required: !0,
                type: { name: 'TableColumn[]' },
              },
              fullWidth: {
                defaultValue: null,
                description: '',
                name: 'fullWidth',
                required: !1,
                type: { name: 'boolean' },
              },
              ordering: {
                defaultValue: null,
                description: '',
                name: 'ordering',
                required: !1,
                type: { name: 'Ordering' },
              },
              setOrdering: {
                defaultValue: null,
                description: '',
                name: 'setOrdering',
                required: !1,
                type: { name: '(ordering: Ordering) => void' },
              },
              onSaveRow: {
                defaultValue: null,
                description: '',
                name: 'onSaveRow',
                required: !1,
                type: { name: '(row: TableData) => void' },
              },
              onSaveNewRow: {
                defaultValue: null,
                description: '',
                name: 'onSaveNewRow',
                required: !1,
                type: { name: '(row: TableData) => void' },
              },
              removeRow: {
                defaultValue: null,
                description: '',
                name: 'removeRow',
                required: !1,
                type: { name: '(rowId: string) => void' },
              },
              loading: {
                defaultValue: null,
                description: '',
                name: 'loading',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Table/index.tsx#Table'] = {
              docgenInfo: Table.__docgenInfo,
              name: 'Table',
              path: 'src/stories/Foundation/Table/index.tsx#Table',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories/Foundation/Text/index.tsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        x: function () {
          return Text;
        },
      });
      var _templateObject,
        _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__('./node_modules/react/index.js'),
          __webpack_require__('./node_modules/styled-components/dist/styled-components.browser.esm.js')),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p(
          _templateObject ||
            (_templateObject = (0,
            _Users_rostimelk_Projects_components_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              ['\n  margin: 0;\n  line-height: 1.2em;\n  font-size: ', ';\n  color: ', ';\n  font-weight: ', ';\n']
            )),
          function (p) {
            return 'var(--font-size-'.concat(p.size, ')');
          },
          function (p) {
            return 'var(--color-'.concat(p.color, ')');
          },
          function (p) {
            return p.bold ? 'bold' : 'normal';
          }
        ),
        Text = function Text(_ref) {
          var _ref$size = _ref.size,
            size = void 0 === _ref$size ? '14' : _ref$size,
            _ref$color = _ref.color,
            color = void 0 === _ref$color ? 'black' : _ref$color,
            _ref$type = _ref.type,
            type = void 0 === _ref$type ? 'p' : _ref$type,
            bold = _ref.bold,
            children = _ref.children,
            className = _ref.className;
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Wrapper, {
            as: type,
            bold: bold,
            size: size,
            color: color,
            className: className,
            children: children,
          });
        };
      try {
        (Wrapper.displayName = 'Wrapper'),
          (Wrapper.__docgenInfo = {
            description: '',
            displayName: 'Wrapper',
            props: {
              type: {
                defaultValue: { value: 'p' },
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"p"' },
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"span"' },
                  ],
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: 'Ref<HTMLParagraphElement>' },
              },
              size: {
                defaultValue: { value: '14' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"14"' },
                    { value: '"16"' },
                    { value: '"18"' },
                    { value: '"22"' },
                    { value: '"28"' },
                    { value: '"48"' },
                    { value: '"68"' },
                    { value: '"98"' },
                  ],
                },
              },
              bold: { defaultValue: null, description: '', name: 'bold', required: !1, type: { name: 'boolean' } },
              theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'any' } },
              as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'undefined' } },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Text/index.tsx#Wrapper'] = {
              docgenInfo: Wrapper.__docgenInfo,
              name: 'Wrapper',
              path: 'src/stories/Foundation/Text/index.tsx#Wrapper',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Text.displayName = 'Text'),
          (Text.__docgenInfo = {
            description: 'Text component',
            displayName: 'Text',
            props: {
              size: {
                defaultValue: { value: '14' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"14"' },
                    { value: '"16"' },
                    { value: '"18"' },
                    { value: '"22"' },
                    { value: '"28"' },
                    { value: '"48"' },
                    { value: '"68"' },
                    { value: '"98"' },
                  ],
                },
              },
              color: {
                defaultValue: { value: 'black' },
                description: '',
                name: 'color',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"black"' },
                    { value: '"lavender"' },
                    { value: '"whisperBlue"' },
                    { value: '"plumbagoBlue"' },
                    { value: '"salviaBlue"' },
                    { value: '"royalBlue"' },
                    { value: '"marineBlue"' },
                    { value: '"whisperYellow"' },
                    { value: '"cheesecakeYellow"' },
                    { value: '"sunYellow"' },
                    { value: '"dijonYellow"' },
                    { value: '"curryYellow"' },
                    { value: '"autumnYellow"' },
                    { value: '"whisperCoral"' },
                    { value: '"cantaloupeOrange"' },
                    { value: '"papayaOrange"' },
                    { value: '"fireOrange"' },
                    { value: '"burntOrange"' },
                    { value: '"rustRed"' },
                    { value: '"whisperTaupe"' },
                    { value: '"macaronTaupe"' },
                    { value: '"eveningTaupe"' },
                    { value: '"clayTaupe"' },
                    { value: '"chestnutTaupe"' },
                    { value: '"rosewoodTaupe"' },
                    { value: '"whisperPink"' },
                    { value: '"candyflossPink"' },
                    { value: '"petitePink"' },
                    { value: '"balloonPink"' },
                    { value: '"passionPink"' },
                    { value: '"burntPink"' },
                    { value: '"whisperOrange"' },
                    { value: '"apricotOrange"' },
                    { value: '"caramelBrown"' },
                    { value: '"cinnamonBrown"' },
                    { value: '"leatherBrown"' },
                    { value: '"chocolateBrown"' },
                    { value: '"whisperGreen"' },
                    { value: '"greenTea"' },
                    { value: '"springGreen"' },
                    { value: '"oliveGreen"' },
                    { value: '"mossGreen"' },
                    { value: '"oreganoGreen"' },
                    { value: '"coralOrange"' },
                    { value: '"signalOrange"' },
                    { value: '"intenseOrange"' },
                    { value: '"hotOrange"' },
                    { value: '"redWine"' },
                    { value: '"grey98"' },
                    { value: '"grey96"' },
                    { value: '"grey91"' },
                    { value: '"grey86"' },
                    { value: '"grey76"' },
                    { value: '"grey62"' },
                    { value: '"grey45"' },
                    { value: '"grey35"' },
                    { value: '"grey25"' },
                    { value: '"grey15"' },
                    { value: '"grey10"' },
                    { value: '"white"' },
                  ],
                },
              },
              type: {
                defaultValue: { value: 'p' },
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"p"' },
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"span"' },
                  ],
                },
              },
              bold: { defaultValue: null, description: '', name: 'bold', required: !1, type: { name: 'boolean' } },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/Foundation/Text/index.tsx#Text'] = {
              docgenInfo: Text.__docgenInfo,
              name: 'Text',
              path: 'src/stories/Foundation/Text/index.tsx#Text',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
      function (module, __unused_webpack_exports, __webpack_require__) {
        var map = {
          './Forms/Button/Button.stories.tsx': './src/stories/Forms/Button/Button.stories.tsx',
          './Forms/Checkbox/Checkbox.stories.tsx': './src/stories/Forms/Checkbox/Checkbox.stories.tsx',
          './Forms/Fieldset/Fieldset.stories.tsx': './src/stories/Forms/Fieldset/Fieldset.stories.tsx',
          './Forms/Form/Form.stories.tsx': './src/stories/Forms/Form/Form.stories.tsx',
          './Forms/Input/Input.stories.tsx': './src/stories/Forms/Input/Input.stories.tsx',
          './Forms/InputWrapper/InputWrapper.stories.tsx': './src/stories/Forms/InputWrapper/InputWrapper.stories.tsx',
          './Forms/Label/Label.stories.tsx': './src/stories/Forms/Label/Label.stories.tsx',
          './Forms/Radio/Radio.stories.tsx': './src/stories/Forms/Radio/Radio.stories.tsx',
          './Forms/Select/Select.stories.tsx': './src/stories/Forms/Select/Select.stories.tsx',
          './Forms/TextArea/TextArea.stories.tsx': './src/stories/Forms/TextArea/TextArea.stories.tsx',
          './Foundation/AlertText/AlertText.stories.tsx': './src/stories/Foundation/AlertText/AlertText.stories.tsx',
          './Foundation/Badge/Badge.stories.tsx': './src/stories/Foundation/Badge/Badge.stories.tsx',
          './Foundation/Card/Card.stories.tsx': './src/stories/Foundation/Card/Card.stories.tsx',
          './Foundation/ColorBox/ColorBox.stories.tsx': './src/stories/Foundation/ColorBox/ColorBox.stories.tsx',
          './Foundation/Flex/Flex.stories.tsx': './src/stories/Foundation/Flex/Flex.stories.tsx',
          './Foundation/Grid/Grid.stories.tsx': './src/stories/Foundation/Grid/Grid.stories.tsx',
          './Foundation/GridItem/GridItem.stories.tsx': './src/stories/Foundation/GridItem/GridItem.stories.tsx',
          './Foundation/Icon/Icon.stories.tsx': './src/stories/Foundation/Icon/Icon.stories.tsx',
          './Foundation/IconButton/IconButton.stories.tsx':
            './src/stories/Foundation/IconButton/IconButton.stories.tsx',
          './Foundation/Spinner/Spinner.stories.tsx': './src/stories/Foundation/Spinner/Spinner.stories.tsx',
          './Foundation/Table/Table.stories.tsx': './src/stories/Foundation/Table/Table.stories.tsx',
          './Foundation/Text/Text.stories.tsx': './src/stories/Foundation/Text/Text.stories.tsx',
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src/stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$');
      },
    './src/stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$':
      function (module, __unused_webpack_exports, __webpack_require__) {
        var map = { './Documentation/About.stories.mdx': './src/stories/Documentation/About.stories.mdx' };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src/stories sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$');
      },
    './storybook-init-framework-entry.js': function (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__('./node_modules/@storybook/react/dist/esm/client/index.js');
    },
    '?4f7e': function () {},
  },
  function (__webpack_require__) {
    var __webpack_exec__ = function (moduleId) {
      return __webpack_require__((__webpack_require__.s = moduleId));
    };
    __webpack_require__.O(0, [241], function () {
      return (
        __webpack_exec__('./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'),
        __webpack_exec__('./node_modules/@storybook/core-client/dist/esm/globals/globals.js'),
        __webpack_exec__('./storybook-init-framework-entry.js'),
        __webpack_exec__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js'
        ),
        __webpack_exec__('./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'),
        __webpack_exec__(
          './node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_exec__('./.storybook/preview.js-generated-config-entry.js'),
        __webpack_exec__('./generated-stories-entry.js')
      );
    });
    __webpack_require__.O();
  },
]);
