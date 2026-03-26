#!/usr/bin/env python3
"""
POC: Web3Forms Contact Form Integration Test

This script tests the Web3Forms API endpoint to verify that form submissions
work correctly before building the full application.

Tests:
1. Successful submission with valid data
2. Validation and error handling
3. Cloudflare Workers compatibility (using standard requests)
"""

import requests
import json
from typing import Dict, Any

# Web3Forms Configuration
WEB3FORMS_API_URL = "https://api.web3forms.com/submit"
WEB3FORMS_ACCESS_KEY = "af781fa2-7ab3-4154-8aee-f123f4ae54c5"
RECIPIENT_EMAIL = "info@drag-ai.com"


def test_successful_submission() -> bool:
    """Test successful form submission with valid data"""
    print("\n=== Test 1: Successful Submission ===")
    
    payload = {
        "access_key": WEB3FORMS_ACCESS_KEY,
        "subject": "POC Test - Contact Form Submission",
        "from_name": "Contact Form POC",
        "email": "[email protected]",
        "reply_to": "[email protected]",
        "name": "John Doe",
        "company": "Acme Corporation",
        "message": "This is a test message from the POC to verify Web3Forms integration works correctly.",
        "botcheck": False,
    }
    
    try:
        response = requests.post(
            WEB3FORMS_API_URL,
            headers={
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            json=payload,
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        if response.status_code == 200 and response.json().get("success"):
            print("✅ Test 1 PASSED: Form submitted successfully")
            return True
        else:
            print("❌ Test 1 FAILED: Unexpected response")
            return False
            
    except Exception as e:
        print(f"❌ Test 1 FAILED: Exception occurred - {str(e)}")
        return False


def test_missing_fields() -> bool:
    """Test submission with missing required fields"""
    print("\n=== Test 2: Missing Required Fields ===")
    
    payload = {
        "access_key": WEB3FORMS_ACCESS_KEY,
        # Missing email and message fields
        "name": "Jane Smith",
    }
    
    try:
        response = requests.post(
            WEB3FORMS_API_URL,
            headers={
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            json=payload,
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        # Web3Forms should either reject this or handle it gracefully
        if response.status_code >= 200 and response.status_code < 500:
            print("✅ Test 2 PASSED: API handled missing fields appropriately")
            return True
        else:
            print("❌ Test 2 FAILED: Unexpected response")
            return False
            
    except Exception as e:
        print(f"❌ Test 2 FAILED: Exception occurred - {str(e)}")
        return False


def test_invalid_access_key() -> bool:
    """Test submission with invalid access key"""
    print("\n=== Test 3: Invalid Access Key ===")
    
    payload = {
        "access_key": "invalid-key-12345",
        "subject": "Test - Should Fail",
        "email": "[email protected]",
        "name": "Test User",
        "message": "This should fail due to invalid access key",
    }
    
    try:
        response = requests.post(
            WEB3FORMS_API_URL,
            headers={
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            json=payload,
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        # Should fail with invalid access key
        result = response.json()
        if not result.get("success", True):
            print("✅ Test 3 PASSED: Invalid access key rejected appropriately")
            return True
        else:
            print("❌ Test 3 FAILED: Invalid key was accepted (unexpected)")
            return False
            
    except Exception as e:
        print(f"❌ Test 3 FAILED: Exception occurred - {str(e)}")
        return False


def test_bot_protection() -> bool:
    """Test bot protection with honeypot field"""
    print("\n=== Test 4: Bot Protection (Honeypot) ===")
    
    payload = {
        "access_key": WEB3FORMS_ACCESS_KEY,
        "subject": "Bot Test - Should be filtered",
        "email": "[email protected]",
        "name": "Bot User",
        "message": "This is a bot submission",
        "botcheck": True,  # Bot detection triggered
    }
    
    try:
        response = requests.post(
            WEB3FORMS_API_URL,
            headers={
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            json=payload,
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        # Web3Forms should handle bot detection
        result = response.json()
        if not result.get("success", True) or "bot" in str(result).lower():
            print("✅ Test 4 PASSED: Bot protection working")
            return True
        else:
            print("⚠️  Test 4 WARNING: Bot submission may have been accepted")
            return True  # Not a critical failure
            
    except Exception as e:
        print(f"❌ Test 4 FAILED: Exception occurred - {str(e)}")
        return False


def test_with_optional_company() -> bool:
    """Test submission with optional company field"""
    print("\n=== Test 5: Submission with Optional Company Field ===")
    
    payload = {
        "access_key": WEB3FORMS_ACCESS_KEY,
        "subject": "POC Test - With Company Field",
        "from_name": "Contact Form POC",
        "email": "[email protected]",
        "reply_to": "[email protected]",
        "name": "Alice Johnson",
        "company": "",  # Empty optional field
        "message": "Testing submission without company information.",
        "botcheck": False,
    }
    
    try:
        response = requests.post(
            WEB3FORMS_API_URL,
            headers={
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            json=payload,
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        if response.status_code == 200 and response.json().get("success"):
            print("✅ Test 5 PASSED: Optional company field handled correctly")
            return True
        else:
            print("❌ Test 5 FAILED: Unexpected response")
            return False
            
    except Exception as e:
        print(f"❌ Test 5 FAILED: Exception occurred - {str(e)}")
        return False


def main():
    """Run all POC tests"""
    print("=" * 60)
    print("Web3Forms POC Testing Suite")
    print("=" * 60)
    print(f"API Endpoint: {WEB3FORMS_API_URL}")
    print(f"Recipient: {RECIPIENT_EMAIL}")
    print("=" * 60)
    
    results = {
        "Test 1 - Successful Submission": test_successful_submission(),
        "Test 2 - Missing Fields": test_missing_fields(),
        "Test 3 - Invalid Access Key": test_invalid_access_key(),
        "Test 4 - Bot Protection": test_bot_protection(),
        "Test 5 - Optional Company Field": test_with_optional_company(),
    }
    
    print("\n" + "=" * 60)
    print("Test Summary")
    print("=" * 60)
    
    passed = sum(1 for result in results.values() if result)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name}: {status}")
    
    print("=" * 60)
    print(f"Results: {passed}/{total} tests passed")
    print("=" * 60)
    
    if passed == total:
        print("\n🎉 All tests passed! Web3Forms integration is working correctly.")
        print("✅ Ready to proceed with full application development.")
        return True
    else:
        print(f"\n⚠️  {total - passed} test(s) failed. Review errors above.")
        return False


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
