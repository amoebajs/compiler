import * as React from "react";
import { ReactComponent } from "@amoebajs/builder";
import { Group, Component, Input, Extends, Method } from "@amoebajs/core";

/**
 * ## Generator
 *
 * @author Big Mogician
 * @export
 * @param {IProps} props
 * @returns
 */
export function Generator() {
  const PositionStringRules = {
    key: ["all", "top", "bottom", "left", "right"],
    value: "string",
  };
  return (
    <Component name="basic-element" displayName="基础组件" version="0.0.1-beta.0">
      <Extends module={ReactComponent}>
        <Group name="default">
          <Input name="">woshinidie</Input>
        </Group>
        <Group name="basic" displayName="基础属性" description="没有描述。">
          <Input key="layoutWidth" type="string" name="width" displayName="组件宽度" />
          <Input key="layoutHeight" type="string" name="height" displayName="组件高度" />
          <Input key="layoutBackground" type="string" name="background" displayName="背景色">
            transparent
          </Input>
          <Input
            key="layoutBorderStyle"
            name="borderStyle"
            displayName="边框风格"
            map={PositionStringRules}
          >
            {["all", "solid"]}
          </Input>
          <Input
            key="layoutBorderColor"
            name="borderColor"
            displayName="边框颜色"
            map={PositionStringRules}
          >
            {["all", "transparent"]}
          </Input>
          <Input
            key="layoutBorderWidth"
            name="borderWidth"
            displayName="边框尺寸"
            map={PositionStringRules}
          >
            {[]}
          </Input>
          <Input key="layoutPadding" name="padding" displayName="内边距" map={PositionStringRules}>
            {[]}
          </Input>
          <Input key="layoutMargin" name="margin" displayName="内边距" map={PositionStringRules}>
            {[]}
          </Input>
        </Group>
        <Method name="onInit" override="super">
          {function (this: any) {
            this.setTagName("div");
            this.addAttributesWithMap({ style: this.resolveRootElementStyle() });
          }}
        </Method>
      </Extends>
    </Component>
  );
}
