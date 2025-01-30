"use client";

import React from "react"
import {
  Drawer as Draw,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import { images } from "@/constants"
import Link from "next/link"

import { useTranslations, useLocale } from "next-intl";

const Drawer = ({ isOpen, toggle }: any) => {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <React.Fragment>
      <Draw anchor={"left"} open={isOpen} onClose={() => toggle()}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "#070d07",
            height: "100%",
            color: "#ffffff",
          }}
        >
          <div className="flex justify-center">
            <Image src={images.logo} alt="" className="w-[160px] mt-8" />
          </div>

          <div className="mt-8">
            <List>
              <ListItem key="1" disablePadding>
                <ListItemButton
                  component="a"
                  href="/#about"
                  onClick={() => toggle()}
                >
                  <span className="text-[20px] uppercase">{t("navigation.about.text")}</span>
                </ListItemButton>
              </ListItem>

              <ListItem key="1" disablePadding>
                <ListItemButton
                  component="a"
                  href="/#our-product"
                  onClick={() => toggle()}
                >
                  <span className="text-[20px] uppercase">{t("navigation.product.text")}</span>
                </ListItemButton>
              </ListItem>

              <ListItem key="1" disablePadding>
                <ListItemButton
                  component="a"
                  href="/#a-paradigm-shift"
                  onClick={() => toggle()}
                >
                  <span className="text-[20px] uppercase">{t("navigation.paradigm.text")}</span>
                </ListItemButton>
              </ListItem>

              <ListItem key="1" disablePadding>
                <ListItemButton
                  component="a"
                  href="/#technology"
                  onClick={() => toggle()}
                >
                  <span className="text-[20px] uppercase">{t("navigation.technology.text")}</span>
                </ListItemButton>
              </ListItem>

              <ListItem key="1" disablePadding>
                <ListItemButton
                  component="a"
                  href="/#benefits"
                  onClick={() => toggle()}
                >
                  <span className="text-[20px] uppercase">{t("navigation.benefits.text")}</span>
                </ListItemButton>
              </ListItem>

              <ListItem key="1" disablePadding>
                <ListItemButton
                  component="a"
                  href="/#references"
                  onClick={() => toggle()}
                >
                  <span className="text-[20px] uppercase">{t("navigation.references.text")}</span>
                </ListItemButton>
              </ListItem>

              <ListItem key="1" disablePadding>
                <ListItemButton
                  component="a"
                  href="/#contact"
                  onClick={() => toggle()}
                >
                  <span className="text-[20px] uppercase">{t("navigation.contact.text")}</span>
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Box>
      </Draw>
    </React.Fragment>
  )
}

export default Drawer
