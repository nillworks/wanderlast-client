'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';

import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
} from '@heroui/react';
import Image from 'next/image';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-md border border-gray-200">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-black">Welcome Back</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Resume your adventure with Wanderlust
          </p>
        </div>

        {/* Form */}
        <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {/* Email */}
          <TextField isRequired name="email" type="email">
            <Label>Email Address</Label>
            <Input placeholder="Enter your email" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type={showPassword ? 'text' : 'password'}
          >
            <Label>Password</Label>

            <Input
              placeholder="Enter your password"
              endContent={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              }
            />

            <FieldError />
          </TextField>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="text-cyan-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <Button type="submit" className="bg-cyan-500 w-full text-white h-11">
            Sign In
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <span className="text-sm text-gray-500">Or continue with</span>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* Google */}
        <Button variant="bordered" className="w-full h-11 border border-[#ddd]">
          <Image
            width={20}
            height={20}
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
          />
          Sign Up With Google
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-7">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-cyan-500 font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
