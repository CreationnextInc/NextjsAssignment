import { NextPage } from "next";
import Head from "next/head";
import { Box, Button, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Product Catalog App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component="main" display="flex" justifyContent="center">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={3}
          mt={10}
          width={800}
        >
          <Typography align="center" variant="h2" component="h1">
            Welcome To NextJs Product Catalog App
          </Typography>
          <Link href="/products" passHref>
            <Button
              variant="outlined"
              size="large"
              endIcon={<DoubleArrowIcon />}
              className={`${styles.explore_btn}`}
            >
              Let's Explore
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};
export default Home;
