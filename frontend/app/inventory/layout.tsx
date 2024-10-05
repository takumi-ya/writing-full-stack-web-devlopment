"use client";

import { Logout as LogoutIcon, Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import styles from "./products/styles.module.css";

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            在庫管理システム
          </Typography>
          <Button variant="contained" startIcon={<LogoutIcon />}>
            ログアウト
          </Button>
        </Toolbar>
      </AppBar>
      <div className={styles.container}>
        <aside className={styles.navbar}>サイドバー</aside>
        <main className={styles.content}>
          <section>{children}</section>
        </main>
      </div>
      <footer className={styles.footer}>フッター</footer>
    </Box>
  );
}
