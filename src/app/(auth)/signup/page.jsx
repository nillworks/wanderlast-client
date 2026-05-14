'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from '@heroui/react';
import Image from 'next/image';
import { authClient, signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleFromSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataAll = Object.fromEntries(formData);

    // Email Password authentication
    const { data, error } = await authClient.signUp.email({
      name: dataAll.name,
      email: dataAll.email,
      password: dataAll.password,
      image: dataAll.image,
      callbackURL: '/signin',
    });

    if (data) {
      signOut();
      toast.success('Account created successfully', {
        description: 'Your account has been created. You can now sign in.',
        variant: 'success',
      });
      router.push('/signin');
    }

    if (error) {
      toast.danger('Signup failed', {
        description: error.message || 'Please try again later.',
        variant: 'danger',
      });
      return;
    }

    e.target.reset();
  };

  // google signUp
  const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: 'google',
    });
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-md border border-gray-200">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-light text-black">Create Account</h1>

          <p className="text-gray-500 mt-3 text-sm">
            Start your adventure with Wanderlust
          </p>
        </div>

        {/* Form */}
        <Form className="flex flex-col gap-5" onSubmit={handleFromSubmit}>
          {/* Full Name */}
          <TextField isRequired name="name">
            <Label>Full Name</Label>
            <Input placeholder="Enter your full name" />
            <FieldError />
          </TextField>

          {/* Image URL */}
          <TextField
            isRequired
            name="image"
            type="url"
            validate={value => {
              if (!value.startsWith('http')) {
                return 'Please enter a valid image URL';
              }

              return null;
            }}
          >
            <Label>Image URL</Label>

            <Input placeholder="https://example.com/image.jpg" />

            <FieldError />
          </TextField>

          {/* Email */}
          <TextField isRequired name="email" type="email">
            <Label>Email Address</Label>

            <Input placeholder="john@example.com" />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
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

            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Submit Button */}
          <Button type="submit" className="bg-cyan-500 w-full text-white h-11">
            Create Account
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-gray-200"></div>

          <span className="text-sm text-gray-500">Or sign up with</span>

          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* Google Login */}
        <Button
          onClick={handleGoogleSignIn}
          variant="bordered"
          className="w-full border border-[#ddd] h-11"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            width={20}
            height={20}
          />
          Sign Up With Google
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-7">
          Already have an account?{' '}
          <Link href="/signin" className="text-cyan-500 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
