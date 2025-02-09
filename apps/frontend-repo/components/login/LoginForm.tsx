"use client";
import GoogleIcon from "@mui/icons-material/Google";

import { Button, CircularProgress } from "@mui/material";
import useLogin from "../../app/login/repositories/useLogin";

const LoginSection = () => {
  const { loading, loginUser } = useLogin();

  return (
    <div style={{ display: "flex", gap: 20,marginTop:32 }}>
      <Button
        disabled={loading}
        fullWidth
        variant="contained"
        color="primary"
        style={{ margin: "24px 0 16px" }}
        onClick={loginUser}
        size="large"
      >
        {loading ? (
          <CircularProgress size="24px" color="inherit" />
        ) : (
          <GoogleIcon />
        )}
        <div style={{ marginLeft: 8 }}>Sign In With Google</div>
      </Button>
    </div>
  );
};

export default LoginSection;
