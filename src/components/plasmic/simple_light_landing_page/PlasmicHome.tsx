// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7dv7av1r79GKcTkxWBCCC5
// Component: _M3zHV2HVq35
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: s8QRW04FLs1V/component
import Section from "../../Section"; // plasmic-import: 9fwp87NsILwMr/component
import Button from "../../Button"; // plasmic-import: n-UKD-HvmTBHO/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: TZU1tij1E2FO/component
import Testimonial from "../../Testimonial"; // plasmic-import: 0JnHKrbHXTc9/component
import HomeCta from "../../HomeCta"; // plasmic-import: Um7rDQNzCgI/component
import Footer from "../../Footer"; // plasmic-import: oKk7wZ_pV70V/component

import { useScreenVariants as useScreenVariantsaEDxUfg076W7W } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aEDxUfg076W7w/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: 7dv7av1r79GKcTkxWBCCC5/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: _M3zHV2HVq35/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 9wX_AhLiHCFcJ/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: Zkd2VTbSz5KVC/icon
import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: HW490K0-48Mzb/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: awSIZVYfpzf4h/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: cLN8sjme3KJ7R/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: 985l9KGRjJNF6/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: PNbbhXk_hXvFP/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: 7xA9hA8WGE6ts/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: 7sZi4EALM62Rv/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: 2h7hq4cJT_8WJ/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: Gb8LjLa5WuYb0/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: 0GdoOASsEimCr/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: 8EGXXPgjGmJip/icon
import heroImageKbGqOu2N2SeL from "./images/heroImage.png"; // plasmic-import: KBGq_ou2n2seL/picture
import simpleProjectQ1McpJv2Y6Yw from "./images/simpleProject.png"; // plasmic-import: Q1McpJv2Y-6YW/picture

export type PlasmicHome__VariantMembers = {};
export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  topSection?: p.Flex<typeof Section>;
  solutions?: p.Flex<typeof Section>;
  columns?: p.Flex<"div">;
  howItWorks?: p.Flex<typeof Section>;
  validation?: p.Flex<typeof Section>;
  testimonial?: p.Flex<typeof Testimonial>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeProps {
  className?: string;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsaEDxUfg076W7W()
  });

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"topSection"}
            data-plasmic-override={overrides.topSection}
            className={classNames("__wab_instance", sty.topSection)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___2MGiz)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__dUtJh)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__eolba)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ge7Ps
                    )}
                  >
                    {"Make your website"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yhiHr
                    )}
                  >
                    {"wonderful"}
                  </div>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__q4Km9
                  )}
                >
                  {
                    "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jk4V)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__kRqV)}
                  color={"blue" as const}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg__mNhNm)}
                      role={"img"}
                    />
                  }
                  showEndIcon={true}
                >
                  {"Start free trial"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button___1TWR)}
                >
                  {"Learn more"}
                </Button>
              </p.Stack>

              <div className={classNames(projectcss.all, sty.freeBox__gpheT)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__atYbM)}
                  displayHeight={"100%" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  src={{
                    src: heroImageKbGqOu2N2SeL,
                    fullWidth: 1536,
                    fullHeight: 864,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"solutions"}
            data-plasmic-override={overrides.solutions}
            className={classNames("__wab_instance", sty.solutions)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"Explore the solutions"}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column___9XpoZ)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___8OpDy)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vRqdT
                    )}
                  >
                    {"Powerful suite of tools"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__p7UcV
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                    }
                  </div>

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__gBtK8
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <LightningIcon
                        className={classNames(projectcss.all, sty.svg___16ZTs)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__zl4It
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <HammerIcon
                        className={classNames(projectcss.all, sty.svg__w2VZf)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple Ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__n0I4V
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <PencilIcon
                        className={classNames(projectcss.all, sty.svg__dMAbV)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple Ecosystem"}
                  />
                </p.Stack>
              </div>

              <div className={classNames(projectcss.all, sty.column___43AwW)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__u8Zj3)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  src={{
                    src: simpleProjectQ1McpJv2Y6Yw,
                    fullWidth: 1000,
                    fullHeight: 924,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"howItWorks"}
            data-plasmic-override={overrides.howItWorks}
            className={classNames("__wab_instance", sty.howItWorks)}
            color={"halfDark" as const}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"How Simple works"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__jsBdJ)}
            >
              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__uLix9)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <SwapIcon
                    className={classNames(projectcss.all, sty.svg___9D4TD)}
                    role={"img"}
                  />
                }
                title={"Initial Contact"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__rziEk)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <SlotIcon
                    className={classNames(projectcss.all, sty.svg__sJxoW)}
                    role={"img"}
                  />
                }
                title={"Discovery Session"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__ehZkt)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <CycleIcon
                    className={classNames(projectcss.all, sty.svg__qbCjL)}
                    role={"img"}
                  />
                }
                title={"Contracting"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__becd)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <HammerIcon
                    className={classNames(projectcss.all, sty.svg__kGk0G)}
                    role={"img"}
                  />
                }
                title={"Fast Prototyping"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__rs7Gs)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <PencilIcon
                    className={classNames(projectcss.all, sty.svg__m1UxP)}
                    role={"img"}
                  />
                }
                title={"Design Phase"}
              />

              <FeatureCard
                className={classNames(
                  "__wab_instance",
                  sty.featureCard___3MPxe
                )}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <LightningIcon
                    className={classNames(projectcss.all, sty.svg__dVLu)}
                    role={"img"}
                  />
                }
                title={"Develop & Launch"}
              />
            </p.Stack>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__rg3Tj)} />
            ) : null}
          </Section>

          <Section
            data-plasmic-name={"validation"}
            data-plasmic-override={overrides.validation}
            className={classNames("__wab_instance", sty.validation)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
            }
            title={"Trusted by over 20,000 companies all over the world"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___4BLn)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fyJaD)}
              >
                <FacebookLogoIcon
                  className={classNames(projectcss.all, sty.svg__jgLgs)}
                  role={"img"}
                />

                <TinderLogoIcon
                  className={classNames(projectcss.all, sty.svg__xLxZz)}
                  role={"img"}
                />

                <AirbnbLogoIcon
                  className={classNames(projectcss.all, sty.svg__yHPv7)}
                  role={"img"}
                />

                <HubspotLogoIcon
                  className={classNames(projectcss.all, sty.svg__x9OSb)}
                  role={"img"}
                />

                <AmazonLogoIcon
                  className={classNames(projectcss.all, sty.svg___5YhXa)}
                  role={"img"}
                />
              </p.Stack>

              <Testimonial
                data-plasmic-name={"testimonial"}
                data-plasmic-override={overrides.testimonial}
                className={classNames("__wab_instance", sty.testimonial)}
              />
            </p.Stack>
          </Section>

          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "topSection",
    "solutions",
    "columns",
    "howItWorks",
    "validation",
    "testimonial",
    "homeCta",
    "footer"
  ],
  header: ["header"],
  topSection: ["topSection"],
  solutions: ["solutions", "columns"],
  columns: ["columns"],
  howItWorks: ["howItWorks"],
  validation: ["validation", "testimonial"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof Section;
  solutions: typeof Section;
  columns: "div";
  howItWorks: typeof Section;
  validation: typeof Section;
  testimonial: typeof Testimonial;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHome__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHome__ArgProps,
          internalVariantPropNames: PlasmicHome__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    solutions: makeNodeComponent("solutions"),
    columns: makeNodeComponent("columns"),
    howItWorks: makeNodeComponent("howItWorks"),
    validation: makeNodeComponent("validation"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
