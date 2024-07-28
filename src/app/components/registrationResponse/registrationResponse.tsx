import React, { useEffect , useState} from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { Box } from '@mui/material';

const RegistrationResponse = ({ responseMessage }: { responseMessage: string }) => {
  const router = useRouter();
 

  useEffect(() => {
    console.log(responseMessage);
    if (responseMessage === "success" ) {
      router.push("/");
    }
  }, [responseMessage, router]);

  return (
    <div>
      {responseMessage === "success" ? (
        <p>Redirecting...</p>
       ) : (
        <center>
        <Box sx={{
          margin: 'auto 400px', marginTop: '50px', marginBottom: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
            <Link href="/register" passHref>
            <Button color="secondary" >
              back
            </Button>
          </Link>
        </Box>
        </center>
      )}
    </div>
  );
}

export default RegistrationResponse;
