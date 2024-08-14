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

const Drawer = ({ isOpen, toggle }: any) => {
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
                  <span className="text-[20px] uppercase">About</span>
                </ListItemButton>
              </ListItem>

              <ListItem key="1" disablePadding>
                <ListItemButton
                  component="a"
                  href="/#our-product"
                  onClick={() => toggle()}
                >
                  <span className="text-[20px] uppercase">Our product</span>
                </ListItemButton>
              </ListItem>

              <ListItem key="1" disablePadding>
                <ListItemButton
                  component="a"
                  href="/#a-paradigm-shift"
                  onClick={() => toggle()}
                >
                  <span className="text-[20px] uppercase">A paradigm shift</span>
                </ListItemButton>
              </ListItem>

              <ListItem key="1" disablePadding>
                <ListItemButton
                  component="a"
                  href="/#technology"
                  onClick={() => toggle()}
                >
                  <span className="text-[20px] uppercase">Technology</span>
                </ListItemButton>
              </ListItem>

              <ListItem key="1" disablePadding>
                <ListItemButton
                  component="a"
                  href="/#benefits"
                  onClick={() => toggle()}
                >
                  <span className="text-[20px] uppercase">Benefits</span>
                </ListItemButton>
              </ListItem>

              <ListItem key="1" disablePadding>
                <ListItemButton
                  component="a"
                  href="/#references"
                  onClick={() => toggle()}
                >
                  <span className="text-[20px] uppercase">references</span>
                </ListItemButton>
              </ListItem>

              <ListItem key="1" disablePadding>
                <ListItemButton
                  component="a"
                  href="/#contact"
                  onClick={() => toggle()}
                >
                  <span className="text-[20px] uppercase">Contact</span>
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
